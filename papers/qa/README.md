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

## 发布前补充验证

```bash
node papers/qa/verify_prepublish.mjs --origin http://127.0.0.1:8962/ --cdp-port 19981 --out /tmp/se-prepublish
```

54项覆盖前进/后退、刷新与共享链接、目录末项、键盘路径、无脚本details、显式主题优先级、减弱动态、高对比颜色映射、打印矩阵和离线阅读；另核 optical-03 几何及 common-red-v1 品牌色在浅深主题/正文墨色变化时稳定。forced-colors由浏览器媒体模拟；缩放自动化采用有效viewport/DPR模拟，不称真实浏览器菜单zoom。原生VoiceOver、IME、实体打印未测。

译文 withheld 时，用 `verify_prepublish.mjs --languages zh` 检查当前中文入口；键盘顺序按实际语言链接是否存在验证，不为通过测试生成旧版 `index-en.html`。
