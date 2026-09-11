# 阅读产物验证

这里验证阅读器和译文发布入口，不验证论文命题。测试只读取真实源文件、译文与已构建产物；反例通过内存 mock 注入，不把 `papers/translations/` 借作临时 fixture，也不清理其他作者的文件。

```bash
python3 papers/check_translation_alignment.py --self-test
python3 papers/qa/test_translation_gate.py
python3 papers/qa/test_reader_assets.py
python3 papers/build_en.py
python3 papers/build.py
python3 papers/validate.py
python3 -m http.server 8962 --directory papers/dist
```

在另一个终端运行（Node.js 22+ 与 Chrome；Linux 可用 `--chrome` 指定路径）：

```bash
node papers/qa/verify_reader.mjs --origin http://127.0.0.1:8962/ --out /tmp/se-reader-qa
```

浏览器使用独立临时 profile 与调试端口，不读取个人浏览器资料。可用 `--cdp-port` 更换端口。截图和 `results.json` 写到指定输出目录；该脚本不修改源文、译文或 manifest。

覆盖中英文三视图、章节目录跳转、语言与章节位置、桌面/320px/390px/720px/1100px/1301px/200%/深色、文本对比度、键盘入口、无 JavaScript、打印（含深色彩色署名的灰阶覆盖）与页面外部请求。译文语义审读范围见 `../translations/review-2026-09-10.md`；结构相同不代表语义正确。
