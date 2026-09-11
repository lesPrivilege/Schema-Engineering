import { spawn } from "node:child_process";
import { writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";


const arg = (name, fallback) => {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
};
const ORIGIN = arg("--origin", "http://127.0.0.1:8962/");
const CHROME = arg("--chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
const CDP_PORT = Number(arg("--cdp-port", "19963"));
const OUT = arg("--out", "/tmp/se-reader-qa");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const record = (id, pass, detail) => {
  results.push({ id, pass: Boolean(pass), ...detail });
  console.log(`${pass ? "PASS" : "FAIL"}  ${id}  ${JSON.stringify(detail)}`);
};

const profile = await mkdtemp(path.join(tmpdir(), "ps01-verify-"));
const chrome = spawn(
  CHROME,
  [
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${profile}`,
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--window-size=1440,900",
    "about:blank",
  ],
  { stdio: ["ignore", "ignore", "ignore"] },
);
let version = null;
for (let i = 0; i < 120 && !version; i++) {
  try { version = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json(); } catch { await sleep(150); }
}
if (!version) { chrome.kill(); throw new Error("headless browser did not open a debugging port"); }

const socket = new WebSocket(version.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let messageId = 0;
const pending = new Map();
const requests = [];
socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Network.requestWillBeSent") requests.push(message.params.request.url);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
  }
};
const send = (method, params = {}, sid) =>
  new Promise((resolve, reject) => {
    const id = ++messageId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params, sessionId: sid }));
  });
const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
const cdp = (method, params) => send(method, params, sessionId);
await cdp("Page.enable");
await cdp("Runtime.enable");
await cdp("Network.enable");

async function evaluate(expression) {
  const { result, exceptionDetails } = await cdp("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (exceptionDetails) throw new Error(exceptionDetails.text + " " + (exceptionDetails.exception?.description ?? ""));
  return result.value;
}
async function waitFor(expression, timeout = 20000) {
  const start = Date.now();
  for (;;) {
    if (await evaluate(expression)) return true;
    if (Date.now() - start > timeout) throw new Error(`timed out: ${expression}`);
    await sleep(120);
  }
}
async function load(url = ORIGIN, { width = 1440, height = 900, theme = "light", features = [], scale = 1 } = {}) {
  await cdp("Emulation.setDeviceMetricsOverride", {
    width, height, deviceScaleFactor: 1, mobile: width < 768,
    ...(scale === 1 ? {} : { width: Math.round(width / scale), height: Math.round(height / scale) }),
  });
  await cdp("Emulation.setPageScaleFactor", { pageScaleFactor: 1 });
  await cdp("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: theme }, ...features],
  });
  requests.length = 0;
  await cdp("Page.navigate", { url });
  await waitFor("document.readyState === 'complete'");
  await sleep(700);
}

const CONTRAST = `(() => {
  const parse = (value) => (value.match(/[\\d.]+/g) || []).slice(0, 3).map(Number);
  const lum = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const backgroundOf = (node) => {
    for (let n = node; n; n = n.parentElement) {
      const c = getComputedStyle(n).backgroundColor;
      if (c && !/rgba\\(0, 0, 0, 0\\)|transparent/.test(c)) return parse(c);
    }
    return [255, 255, 255];
  };
  const rows = [];
  for (const node of document.body.querySelectorAll("*")) {
    const text = [...node.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim()).map((n) => n.textContent.trim()).join(" ");
    if (!text) continue;
    if (!node.getClientRects().length) continue;
    const style = getComputedStyle(node);
    const size = parseFloat(style.fontSize);
    const weight = Number(style.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const value = ratio(parse(style.color), backgroundOf(node));
    rows.push({
      selector: node.tagName.toLowerCase() + (node.className ? "." + String(node.className).split(" ").join(".") : ""),
      text: text.slice(0, 40),
      size: Math.round(size * 10) / 10,
      ratio: Math.round(value * 100) / 100,
      threshold: large ? 3 : 4.5,
      pass: value >= (large ? 3 : 4.5),
    });
  }
  return rows;
})()`;

try {
  await mkdir(OUT, {recursive:true});
  for (const language of ['zh','en']) {
    const filename = language === 'zh' ? 'index.html' : 'index-en.html';
    for (const scenario of [{name:'desktop',width:1440},{name:'mobile',width:390},{name:'dark',width:1440,theme:'dark'},{name:'zoom200',width:1440,scale:2}]) {
      await load(new URL(filename, ORIGIN).href, scenario);
      const state = await evaluate(`({language:document.documentElement.lang, visible:[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').map(n=>n.dataset.paperMode),overflow:document.documentElement.scrollWidth>innerWidth+1})`);
      record(`${language}-${scenario.name}`,state.visible.length===1&&!state.overflow,{...state});
      const contrast = await evaluate(CONTRAST);
      record(`${language}-${scenario.name}-contrast`,contrast.every(row=>row.pass),{checked:contrast.length,failures:contrast.filter(row=>!row.pass)});
      const shot = await cdp('Page.captureScreenshot',{format:'png'});
      await writeFile(path.join(OUT,`${language}-${scenario.name}.png`),Buffer.from(shot.data,'base64'));
    }
    for(const mode of ['canonical','practice','index']) {
      await load(new URL(`${filename}?mode=${mode}`,ORIGIN).href);
      const state=await evaluate(`({mode:document.body.dataset.activeMode,visible:[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').map(n=>n.dataset.paperMode)})`);
      record(`${language}-${mode}`,state.mode===mode&&state.visible.join()===mode,state);
      const anchor=await evaluate(`(() => {const paper=document.querySelector('[data-paper-mode="${mode}"]');const h=paper.querySelectorAll('h2')[1];paper.querySelector('details').open=true;[...paper.querySelectorAll('[data-toc-link]')].find(a=>decodeURIComponent(new URL(a.href).hash.slice(1))===h.id).click();return h.id;})()`);
      const position=await evaluate(`document.getElementById(${JSON.stringify(anchor)}).getBoundingClientRect().top`);
      record(`${language}-${mode}-toc-scroll`,Math.abs(position-128)<3,{position});
      await evaluate(`document.querySelector('[data-language-switch]').click()`);
      await sleep(800);
      const switched=await evaluate(`({mode:document.body.dataset.activeMode,hash:decodeURIComponent(location.hash.slice(1)),language:document.documentElement.lang})`);
      record(`${language}-${mode}-language-anchor`,switched.mode===mode&&switched.hash===anchor&&switched.language!==(language==='zh'?'zh-CN':'en'),switched);
    }
    for (const mode of ['canonical','practice','index']) {
      for (const width of [320,390,720,1100,1301]) {
        await load(new URL(`${filename}?mode=${mode}`,ORIGIN).href,{width});
        const layout=await evaluate(`({width:innerWidth,scrollWidth:document.documentElement.scrollWidth})`);
        record(`${language}-${mode}-width${width}`,layout.scrollWidth<=layout.width+1,layout);
        const contrast=await evaluate(CONTRAST);
        record(`${language}-${mode}-width${width}-contrast`,contrast.every(row=>row.pass),{checked:contrast.length,failures:contrast.filter(row=>!row.pass)});
        if(width===390) {
          await evaluate(`document.querySelector('[data-paper-mode="${mode}"] .table-scroll')?.scrollIntoView({block:'center'})`);
          await sleep(200);
          const shot=await cdp('Page.captureScreenshot',{format:'png'});
          await writeFile(path.join(OUT,`${language}-${mode}-table-mobile.png`),Buffer.from(shot.data,'base64'));
        }
      }
    }
    await load(new URL(filename,ORIGIN).href,{theme:'dark'});
    await evaluate(`document.querySelector('[data-theme-toggle]').click()`);
    const light=await evaluate(`document.documentElement.dataset.theme`);
    record(`${language}-system-dark-toggle`,light==='light',{theme:light});
    await evaluate(`document.querySelector('[data-theme-toggle]').click();document.querySelector('[data-language-switch]').click()`);
    await sleep(800);
    const retained=await evaluate(`document.documentElement.dataset.theme`);
    record(`${language}-theme-language`,retained==='dark',{theme:retained});
    await evaluate(`localStorage.removeItem('schema-engineering-theme');document.documentElement.removeAttribute('data-theme')`);
    await load(new URL(`${filename}?mode=practice#%`,ORIGIN).href);
    const malformed=await evaluate(`document.body.dataset.activeMode`);
    record(`${language}-malformed-hash`,malformed==='practice',{mode:malformed});
    await cdp('Emulation.setScriptExecutionDisabled',{value:true});
    await load(new URL(filename,ORIGIN).href);
    const visible=await evaluate(`[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').length`);
    record(`${language}-noscript`,visible===3,{visible});
    await cdp('Emulation.setScriptExecutionDisabled',{value:false});
    await load(new URL(filename,ORIGIN).href);
    record(`${language}-self-contained`,requests.every(u=>u.startsWith(ORIGIN)||u.startsWith('data:')),{requests});
    await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
    await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
    const focused=await evaluate(`({tag:document.activeElement.tagName,text:document.activeElement.textContent,outline:getComputedStyle(document.activeElement).outlineStyle})`);
    record(`${language}-keyboard`,focused.tag==='A'&&focused.outline!=='none',focused);
    await evaluate(`document.documentElement.dataset.theme='dark';document.body.dataset.signature='color'`);
    await cdp('Emulation.setEmulatedMedia',{media:'print'});
    const print=await evaluate(`[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').length`);
    record(`${language}-print`,print===3,{visible:print});
    const printPalette=await evaluate(`({field:getComputedStyle(document.querySelector('.paper-cover')).getPropertyValue('--ed-field').trim(),mark:getComputedStyle(document.querySelector('.lp-l')).fill})`);
    record(`${language}-print-dark-color`,printPalette.field==='#e6e6e6'&&printPalette.mark==='rgb(0, 0, 0)',printPalette);
    await cdp('Emulation.setEmulatedMedia',{media:''});
  }
} finally {
  await writeFile(path.join(OUT,'results.json'),JSON.stringify({results},null,2)+'\n');
  socket.close();chrome.kill();
  await sleep(300);await rm(profile,{recursive:true,force:true});
}
if(results.some(r=>!r.pass)) process.exitCode=1;
