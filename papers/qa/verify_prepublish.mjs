// Pre-publication reader evidence beyond papers/qa/verify_reader.mjs.
// Covers: back/forward, reload with shared query/hash, hash aliases, long-contents last item,
// keyboard path with visible focus, no-script details, explicit theme vs system, reduced-motion,
// forced-colors (media emulation only), print matrix (system/explicit dark × black/color signature ×
// wide/compact cover) with PDF output, offline reading. Node 22+ (global WebSocket/fetch), headless Chrome via CDP.
import { spawn } from "node:child_process";
import { writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i === -1 ? fallback : process.argv[i + 1]; };
const ORIGIN = arg("--origin", "http://127.0.0.1:8978/");
const CHROME = arg("--chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
const CDP_PORT = Number(arg("--cdp-port", "19981"));
const OUT = arg("--out", "/tmp/se-prepublish");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const record = (id, pass, detail) => { results.push({ id, pass: Boolean(pass), ...detail }); console.log(`${pass ? "PASS" : "FAIL"}  ${id}  ${JSON.stringify(detail).slice(0, 300)}`); };

const profile = await mkdtemp(path.join(tmpdir(), "prepub-verify-"));
const chrome = spawn(CHROME, [`--remote-debugging-port=${CDP_PORT}`, `--user-data-dir=${profile}`, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--window-size=1440,900", "about:blank"], { stdio: ["ignore", "ignore", "ignore"] });
let version = null;
for (let i = 0; i < 120 && !version; i++) { try { version = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json(); } catch { await sleep(150); } }
if (!version) { chrome.kill(); throw new Error("headless browser did not open a debugging port"); }
const socket = new WebSocket(version.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let messageId = 0; const pending = new Map(); const requests = [];
socket.onmessage = (event) => { const m = JSON.parse(event.data); if (m.method === "Network.requestWillBeSent") requests.push(m.params.request.url); if (m.id && pending.has(m.id)) { const { resolve, reject } = pending.get(m.id); pending.delete(m.id); m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result); } };
const send = (method, params = {}, sid) => new Promise((resolve, reject) => { const id = ++messageId; pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params, sessionId: sid })); });
const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
const cdp = (method, params) => send(method, params, sessionId);
await cdp("Page.enable"); await cdp("Runtime.enable"); await cdp("Network.enable");
async function evaluate(expression) { const { result, exceptionDetails } = await cdp("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }); if (exceptionDetails) throw new Error(exceptionDetails.text + " " + (exceptionDetails.exception?.description ?? "")); return result.value; }
async function waitFor(expression, timeout = 20000) { const start = Date.now(); for (;;) { if (await evaluate(expression)) return true; if (Date.now() - start > timeout) throw new Error(`timed out: ${expression}`); await sleep(120); } }
let media = { features: [] };
async function setMedia(features = [], mediaType = "") { media = { features, media: mediaType }; await cdp("Emulation.setEmulatedMedia", { media: mediaType, features }); }
async function load(url, { width = 1440, height = 900, theme = "light", features = [], scale = 1 } = {}) {
  await cdp("Emulation.setDeviceMetricsOverride", { width: Math.round(width / scale), height: Math.round(height / scale), deviceScaleFactor: scale, mobile: width < 768 });
  await setMedia([{ name: "prefers-color-scheme", value: theme }, ...features]);
  requests.length = 0;
  await cdp("Page.navigate", { url });
  await waitFor("document.readyState === 'complete'"); await sleep(600);
}
async function shot(name) { const s = await cdp("Page.captureScreenshot", { format: "png" }); await writeFile(path.join(OUT, `${name}.png`), Buffer.from(s.data, "base64")); }
async function key(k, code, vk, text) { await cdp("Input.dispatchKeyEvent", { type: text ? "keyDown" : "rawKeyDown", key: k, code, windowsVirtualKeyCode: vk, ...(text ? { text, unmodifiedText: text } : {}) }); await cdp("Input.dispatchKeyEvent", { type: "keyUp", key: k, code, windowsVirtualKeyCode: vk }); }
async function clickEl(selector) { const box = await evaluate(`(()=>{const el=document.querySelector(${JSON.stringify(selector)});el.scrollIntoView({block:'center'});const r=el.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2};})()`); await cdp("Input.dispatchMouseEvent", { type: "mouseMoved", x: box.x, y: box.y }); await cdp("Input.dispatchMouseEvent", { type: "mousePressed", x: box.x, y: box.y, button: "left", clickCount: 1 }); await cdp("Input.dispatchMouseEvent", { type: "mouseReleased", x: box.x, y: box.y, button: "left", clickCount: 1 }); await sleep(250); }
const FOCUS = `(()=>{const el=document.activeElement;const cs=getComputedStyle(el);return {tag:el.tagName,text:(el.textContent||'').trim().slice(0,30),cls:(el.className||'').toString().slice(0,24),outline:cs.outlineStyle,width:cs.outlineWidth,visible:cs.outlineStyle!=='none'&&parseFloat(cs.outlineWidth)>0}})()`;

try {
  await mkdir(OUT, { recursive: true });
  for (const language of arg("--languages", "zh,en").split(",")) {
    const filename = language === "zh" ? "index.html" : "index-en.html";
    const url = (q = "") => new URL(filename + q, ORIGIN).href;

    // back / forward through mode links
    await load(url());
    await evaluate(`document.querySelector('[data-mode-link="practice"]:not([data-toc-link])').click()`); await sleep(200);
    await evaluate(`document.querySelector('[data-mode-link="index"]:not([data-toc-link])').click()`); await sleep(200);
    await evaluate(`history.back()`); await sleep(400);
    const back = await evaluate(`({mode:document.body.dataset.activeMode,query:new URLSearchParams(location.search).get('mode'),visible:[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').map(n=>n.dataset.paperMode).join()})`);
    record(`${language}-history-back`, back.mode === "practice" && back.query === "practice" && back.visible === "practice", back);
    await evaluate(`history.forward()`); await sleep(400);
    const fwd = await evaluate(`({mode:document.body.dataset.activeMode,query:new URLSearchParams(location.search).get('mode')})`);
    record(`${language}-history-forward`, fwd.mode === "index" && fwd.query === "index", fwd);

    // shared query + hash, then reload
    const anchor = await evaluate(`document.querySelector('[data-paper-mode="practice"]').querySelectorAll('h3')[2].id`);
    await load(url(`?mode=practice#${encodeURIComponent(anchor)}`));
    const shared = await evaluate(`({mode:document.body.dataset.activeMode,top:document.getElementById(${JSON.stringify(anchor)}).getBoundingClientRect().top})`);
    record(`${language}-shared-link`, shared.mode === "practice" && Math.abs(shared.top - 128) < 4, { anchor, ...shared });
    await cdp("Page.reload"); await waitFor("document.readyState === 'complete'"); await sleep(600);
    const reloaded = await evaluate(`({mode:document.body.dataset.activeMode,top:document.getElementById(${JSON.stringify(anchor)}).getBoundingClientRect().top,hash:decodeURIComponent(location.hash.slice(1))})`);
    record(`${language}-reload-keeps-position`, reloaded.mode === "practice" && Math.abs(reloaded.top - 128) < 4 && reloaded.hash === anchor, reloaded);
    for (const [hash, expect] of [["#paper-index", "index"], ["#" + encodeURIComponent("实践"), "practice"], ["#practice", "practice"]]) {
      await load(url(hash)); const m = await evaluate(`document.body.dataset.activeMode`);
      record(`${language}-hash-alias-${decodeURIComponent(hash).slice(1)}`, m === expect, { mode: m });
    }
    await load(url("?view=index")); record(`${language}-query-alias-view`, (await evaluate(`document.body.dataset.activeMode`)) === "index", {});

    // long contents: last item reachable and working, wide rail and narrow details
    for (const width of [1440, 390]) {
      await load(url("?mode=index"), { width, height: width === 390 ? 844 : 900 });
      if (width === 390) await clickEl('[data-paper-mode="index"] .reader-toc summary');
      const state = await evaluate(`(()=>{const toc=document.querySelector('[data-paper-mode="index"] .reader-toc');const links=[...toc.querySelectorAll('[data-toc-link]')];const last=links[links.length-1];last.scrollIntoView({block:'nearest'});const r=last.getBoundingClientRect();const t=toc.getBoundingClientRect();return {open:toc.open,count:links.length,inViewport:r.top>=0&&r.bottom<=innerHeight,inToc:r.top>=t.top-1&&r.bottom<=t.bottom+1,text:last.textContent.trim().slice(0,40),href:decodeURIComponent(new URL(last.href).hash.slice(1))};})()`);
      await evaluate(`(()=>{const links=document.querySelectorAll('[data-paper-mode="index"] [data-toc-link]');links[links.length-1].focus();links[links.length-1].click();})()`); await sleep(300);
      const landed = await evaluate(`document.getElementById(${JSON.stringify(state.href)}).getBoundingClientRect().top`);
      record(`${language}-toc-last-${width}`, state.open && state.inViewport && state.inToc && Math.abs(landed - 128) < 4, { ...state, landed });
      await shot(`${language}-toc-last-${width}`);
    }

    // keyboard path with visible focus
    await load(url());
    const hasLanguage = await evaluate(`!!document.querySelector('.language-switch[href]')`);
    const tocOffset = hasLanguage ? 6 : 5;
    const path_ = [];
    for (let i = 0; i < tocOffset + 3; i++) { await key("Tab", "Tab", 9); path_.push(await evaluate(FOCUS)); }
    const expected = ["skip-link", "canonical", "practice", "index", "theme", ...(hasLanguage ? ["language"] : []), "toc-summary", "toc-link", "toc-link"];
    const okOrder = path_[0].cls.includes("skip-link") && path_[1].text === "Canonical" && path_[2].text === "Practice" && path_[3].text === "Index" && path_[4].tag === "BUTTON" && (!hasLanguage || path_[5].cls.includes("language-switch")) && path_[tocOffset].tag === "SUMMARY" && path_[tocOffset + 1].tag === "A" && path_[tocOffset + 2].tag === "A";
    record(`${language}-keyboard-order`, okOrder && path_.every((p) => p.visible), { expected, path: path_ });
    await load(url());
    await key("Tab", "Tab", 9); await key("Enter", "Enter", 13, "\r"); await sleep(200); await key("Tab", "Tab", 9);
    const afterSkip = await evaluate(`({hash:location.hash,inMain:!!document.activeElement.closest('#reader-content'),...(${FOCUS})})`);
    record(`${language}-keyboard-skip-link`, afterSkip.hash === "#reader-content" && afterSkip.inMain && afterSkip.visible, afterSkip);
    await load(url());
    for (let i = 0; i < 3; i++) await key("Tab", "Tab", 9);
    await key("Enter", "Enter", 13, "\r"); await sleep(250);
    const kbMode = await evaluate(`({mode:document.body.dataset.activeMode,focus:(${FOCUS})})`);
    record(`${language}-keyboard-enter-mode`, kbMode.mode === "practice", kbMode);
    let beforeToggle = null;
    for (let i = 0; i < 8 && !beforeToggle; i++) { await key("Tab", "Tab", 9); const f = await evaluate(`({tag:document.activeElement.tagName,open:document.activeElement.closest('details')?.open,mode:document.activeElement.closest('[data-paper-mode]')?.dataset.paperMode})`); if (f.tag === "SUMMARY") beforeToggle = f; }
    await key(" ", "Space", 32, " "); await sleep(250);
    const afterToggle = await evaluate(`({tag:document.activeElement.tagName,open:document.activeElement.closest('details')?.open})`);
    record(`${language}-keyboard-details-toggle`, beforeToggle.tag === "SUMMARY" && afterToggle.open !== beforeToggle.open, { beforeToggle, afterToggle });
    await load(url(), { width: 390, height: 844 });
    for (let i = 0; i < tocOffset + 1; i++) await key("Tab", "Tab", 9);
    const narrowSummary = await evaluate(FOCUS);
    await key("Enter", "Enter", 13, "\r"); await sleep(250);
    const narrowOpen = await evaluate(`document.activeElement.closest('details')?.open`);
    record(`${language}-keyboard-390-details`, narrowSummary.tag === "SUMMARY" && narrowSummary.visible && narrowOpen === true, { narrowSummary, narrowOpen });

    // no-script: three volumes, details opens by mouse, no external requests
    await cdp("Emulation.setScriptExecutionDisabled", { value: true });
    await load(url(), { width: 390, height: 844 });
    const nsBefore = await evaluate(`[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').length`);
    await clickEl('[data-paper-mode="canonical"] .reader-toc summary');
    const nsOpen = await evaluate(`document.querySelector('[data-paper-mode="canonical"] .reader-toc').open`);
    const nsCover = await evaluate(`getComputedStyle(document.querySelector('.paper-cover .cover-compact')).display`);
    record(`${language}-noscript-details`, nsBefore === 3 && nsOpen === true && nsCover === "block" && requests.every((u) => u.startsWith(ORIGIN) || u.startsWith("data:")), { visible: nsBefore, open: nsOpen, compactCover: nsCover, requests: requests.length });
    await shot(`${language}-noscript-390-details-open`);
    await cdp("Emulation.setScriptExecutionDisabled", { value: false });

    // explicit theme overrides system preference both ways
    await load(url(), { theme: "dark" });
    await evaluate(`document.documentElement.dataset.theme='light'`); await sleep(100);
    const light = await evaluate(`({canvas:getComputedStyle(document.documentElement).getPropertyValue('--canvas').trim(),bg:getComputedStyle(document.body).backgroundColor,scheme:getComputedStyle(document.documentElement).colorScheme})`);
    await load(url(), { theme: "light" });
    await evaluate(`document.documentElement.dataset.theme='dark'`); await sleep(100);
    const dark = await evaluate(`({canvas:getComputedStyle(document.documentElement).getPropertyValue('--canvas').trim(),bg:getComputedStyle(document.body).backgroundColor,cover:getComputedStyle(document.querySelector('.paper-cover')).getPropertyValue('--ed-field').trim()})`);
    record(`${language}-explicit-theme`, light.canvas === "#edf1f3" && dark.canvas === "#202b32" && dark.cover === "#2b373f", { light, dark });
    await shot(`${language}-explicit-dark-over-system-light`);

    // reduced motion
    await load(url(), { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    const rm_ = await evaluate(`({dur:getComputedStyle(document.querySelector('.reader-toc summary'),'::before').transitionDuration,animated:[...document.querySelectorAll('*')].some(el=>{const cs=getComputedStyle(el);return cs.animationName!=='none'||(parseFloat(cs.transitionDuration)>0)})})`);
    record(`${language}-reduced-motion`, rm_.dur === "0s" && !rm_.animated, rm_);
    await load(url());
    const motion = await evaluate(`[...document.querySelectorAll('*')].filter(el=>{const cs=getComputedStyle(el);return cs.animationName!=='none'||parseFloat(cs.transitionDuration)>0}).map(el=>el.tagName+':'+getComputedStyle(el).transitionDuration).slice(0,5)`);
    record(`${language}-motion-inventory`, true, { transitions: motion });

    // Keep the integrated asset bound to its geometry and fixed brand role colors.
    await load(url());
    const signature = await evaluate(`(()=>{const svg=document.querySelector('.lp-mark');return {revision:svg.dataset.brandRevision,transform:svg.querySelector('g').getAttribute('transform'),bars:[...svg.querySelectorAll('rect')].map(r=>['x','y','width','height'].map(k=>r.getAttribute(k)))}})()`);
    record(`${language}-signature-optical03`,signature.revision==='optical-03'&&signature.transform==='translate(4.5 0)'&&JSON.stringify(signature.bars)===JSON.stringify([['24','12','23','7'],['24','30','23','7']]),signature);
    const signatureColors=await evaluate(`(()=>{document.body.dataset.signature='color';const top=document.querySelector('.lp-bar-top');const light=getComputedStyle(top).fill;document.documentElement.dataset.theme='dark';const dark=getComputedStyle(top).fill;document.documentElement.style.setProperty('--ink','#abcdef');const afterInkChange=getComputedStyle(top).fill;document.documentElement.style.removeProperty('--ink');return {light,dark,afterInkChange}})()`);
    record(`${language}-signature-stable-role`,signatureColors.light==='rgb(201, 94, 85)'&&signatureColors.dark==='rgb(201, 94, 85)'&&signatureColors.afterInkChange===signatureColors.dark,signatureColors);

    // forced colors (media feature emulation only; not a real high-contrast render)
    await load(url(), { features: [{ name: "forced-colors", value: "active" }] });
    await evaluate(`document.body.dataset.signature="color"`);
    const fc = await evaluate(`(()=>{const probe=document.createElement("span");probe.style.cssText="color:CanvasText;background:Canvas";document.body.append(probe);const sysInk=getComputedStyle(probe).color,sysCanvas=getComputedStyle(probe).backgroundColor;probe.remove();const g=(s,p)=>getComputedStyle(document.querySelector(s))[p];return {sysInk,sysCanvas,markTop:g(".lp-bar-top","fill"),matches:matchMedia('(forced-colors: active)').matches,plate:g('.paper-cover .ed-plate','fill'),plateStroke:g('.paper-cover .ed-plate','stroke'),inkPlate:g('.paper-cover .ed-ink-plate','stroke'),inkField:g('.paper-cover .ed-ink-field','stroke'),field:g('.paper-cover .ed-field','fill'),mark:g('.lp-l','fill'),current:g('.mode-controls a[aria-current="page"]','borderBottomColor')};})()`);
    record(`${language}-forced-colors-mapping`, fc.matches && fc.plate===fc.sysCanvas && fc.field===fc.sysCanvas && [fc.plateStroke,fc.inkPlate,fc.inkField,fc.mark,fc.markTop,fc.current].every(v=>v===fc.sysInk), { ...fc, note: "media emulation only; not a native high-contrast render" });
    await shot(`${language}-forced-colors-emulated`);

    // print matrix: (system dark, black) (explicit dark, color) × 1440 / 390
    for (const variant of [{ id: "system-dark-black", theme: "dark", explicit: null, sig: "black" }, { id: "explicit-dark-color", theme: "light", explicit: "dark", sig: "color" }]) {
      for (const width of [1440, 390]) {
        await load(url(), { width, height: width === 390 ? 844 : 900, theme: variant.theme });
        if (variant.explicit) await evaluate(`document.documentElement.dataset.theme='${variant.explicit}'`);
        await evaluate(`document.body.dataset.signature='${variant.sig}'`);
        await setMedia([{ name: "prefers-color-scheme", value: variant.theme }], "print");
        await sleep(150);
        const p = await evaluate(`(()=>{const g=(s,p)=>getComputedStyle(document.querySelector(s))[p];const cover=document.querySelector('.paper-cover');return {visible:[...document.querySelectorAll('[data-paper-mode]')].filter(n=>getComputedStyle(n).display!=='none').length,bodyBg:getComputedStyle(document.body).backgroundColor,ink:g('.paper-body > p:not(.paper-meta)','color'),field:getComputedStyle(cover).getPropertyValue('--ed-field').trim(),plate:getComputedStyle(cover).getPropertyValue('--ed-plate').trim(),markL:g('.lp-l','fill'),markTop:g('.lp-bar-top','fill'),wide:g('.paper-cover .cover-wide','display'),compact:g('.paper-cover .cover-compact','display'),controls:g('.view-controls','display'),maker:g('.maker','display')};})()`);
        const ok = p.visible === 3 && p.bodyBg === "rgb(255, 255, 255)" && p.ink === "rgb(0, 0, 0)" && p.field === "#e6e6e6" && p.markL === "rgb(0, 0, 0)" && p.markTop === "rgb(0, 0, 0)" && p.controls === "none" && p.maker !== "none" && ((width === 1440 && p.wide === "block" && p.compact === "none") || (width === 390 && p.wide === "none" && p.compact === "block"));
        record(`${language}-print-${variant.id}-${width}`, ok, p);
        await shot(`${language}-print-${variant.id}-${width}`);
        if (width === 1440 && language === "zh") { const pdf = await cdp("Page.printToPDF", { printBackground: true, preferCSSPageSize: false, paperWidth: 8.27, paperHeight: 11.69 }); await writeFile(path.join(OUT, `zh-print-${variant.id}.pdf`), Buffer.from(pdf.data, "base64")); }
        await setMedia([{ name: "prefers-color-scheme", value: variant.theme }], "");
      }
    }

    // offline reading of the built file over the local origin with network cut after load
    await load(url());
    await cdp("Network.emulateNetworkConditions", { offline: true, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    await evaluate(`document.querySelector('[data-mode-link="index"]:not([data-toc-link])').click()`); await sleep(200);
    const off = await evaluate(`({mode:document.body.dataset.activeMode,images:[...document.images].every(i=>i.complete),fonts:document.fonts.status})`);
    record(`${language}-offline-after-load`, off.mode === "index", off);
    await cdp("Network.emulateNetworkConditions", { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  }
} finally {
  await writeFile(path.join(OUT, "results.json"), JSON.stringify({ at: new Date().toISOString(), origin: ORIGIN, results }, null, 2) + "\n");
  socket.close(); chrome.kill(); await sleep(300); await rm(profile, { recursive: true, force: true });
}
if (results.some((r) => !r.pass)) process.exitCode = 1;
