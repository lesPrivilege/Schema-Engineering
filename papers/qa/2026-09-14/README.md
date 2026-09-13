# 9.8 · 本地发布准备回执

2026-09-14。基线 `fc820559c529d48521957f972d324a8cccc0194f`；独立工作树 `/private/tmp/se-paper-final-20260914`，分支 `codex/se-paper-final-20260914`。此记录管理发布验证；观察与正文裁决仍由 Practice Index PI-25 及 9.8 增量记录维护。

## 固定交付

- 实践快照：`a263805f65c326ba044392c792e5adf09ecfb98d`，`papers/research/2026-09-14-durable-work-semantics.md`。
- 正文与 Index：`e237bb1`；21 条原则定义及 F1–F27 相对基线逐字一致，三份源的 Edition/base 为 2026-09-14，Revision 9.8。
- 中文候选：`papers/dist/schema-engineering-2026-09-14-reader-2026-09-11-paper-v1.html`，SHA-256 `8fcd1645813d246084ccf2da1e1dbd5fb020ee80412b5b2abf9fe73588d2cc06`。
- 英文：仍绑定 9.6 的来源与译文，未重译、未声称复核 9.8；`build_en.py` 正确 SKIP，不生成 `index-en.html`，中文语言开关 withheld。历史译文保留。

## 核验

- `python3 papers/build_en.py`、`python3 papers/build.py`、`python3 papers/validate.py`：中文三源及14项 reader检查通过；当前入口与日期产物字节一致，14份既有HTML逐字节未改。
- `python3 papers/qa/test_translation_gate.py`：8例通过；正例改用真实固定历史源字节，避免当前修订使所有反例提前在stale-source检查失败。生产门禁未更改。
- `python3 papers/qa/test_reader_assets.py`：3例通过。
- `node papers/qa/verify_prepublish.mjs --languages zh --origin http://127.0.0.1:8979/ --out /private/tmp/se-98-browser-final-pass --cdp-port 19987`：结果见同目录 `browser-results.json`。使用独立无个人资料的headless Chrome profile；英文未测试为当前译文。
- 修复既有浏览器检查的双语链接假设；目录末项测得CSS盒底为900.4375、视口900，scroll取整产生0.4375像素差，几何断言采用1 CSS像素容差。未改阅读器运行代码或CSS。
- 可视抽查由Astra查看390px截图完成；不是人工审稿。没有运行新产品benchmark、成本实验或CourtWork验收。

## 交接与发布状态

本分支完成发布准备，尚未合并、推送或部署，不能登记为已发布。集成时保留本分支提交祖先，以便Index中的固定快照链接可达；不要只拣选正文却遗漏快照提交。集成方核对当前main后合并，执行现有build/validate与Pages流程，工作流通过后更新候选/发布状态。CourtWork产品仓库及其 `PAPER.md` 未修改；是否更新采用pin由原任务在发布后处理。

未完成项：SE merge/push/Pages；9.8英文翻译与语义复核（当前明确withheld）；原任务的CourtWork采用pin更新。Akoma Ntoso、ISO15489、NVIDIA和Google等线索未在本轮核验，不影响已裁定的最小正文，但不能作为新增事实引用。
