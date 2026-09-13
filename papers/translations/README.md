# 英文独立编译约定

中文编订源：9.6 / 2026-09-07，固定 commit `a0234bc42dda75767554a2da89c247d66c2ad022`。用户于2026-09-10同意发布该节点的本地观察与发布面材料。9.7（2026-09-13）已改变中文源；本 cache 仍绑定 9.6 源，按下文规则 withheld，英文入口待重译与复核后开放。

## 唯一编订源

`papers/src/`继续采用自然中文与必要的英文术语。英文不是另一套可独立修订的Canonical；`en/`保存绑定固定中文源的派生译文cache，由`papers/build_en.py`独立编译成英文阅读产物。后续改义必须先改中文源，再重新编译对应英文，不直接在译文发展论断。

三份文本完整翻译，不做摘要。保留heading层级、数量与顺序，列表/表格行、条款编号、代码块原字节、脚注key、链接和既有英文对象名。代码块或原始引用题名允许保留源文字；正文叙述译为自然英文，不把事实、推论、局部观察、裁决或“不支持的外推”混为同级声称。不增设来源、论断或语义实体。

## 术语与来源

同一语境保持术语稳定，不机械逐字替换。现有Work Contract、Current Semantic State、Context Projection、Matter、Run、Assignment、Authority、Accountability、Candidate Change、Committed Event、Work Extension、Practice Index作为对象名时原样保留。

参考译法：正式工作formal work；取得效力acquire effect；弱编译weak compilation；候选candidate；已提交committed；审阅review；证伪falsification；可恢复recoverable；未完义务outstanding obligations。编纂/编订依上下文采用work compilation、editorial formulation等，不把工作编纂缩成软件编译。承诺/提交依原文分别保持commitment/commit，裁决依上下文区分adjudication/decision。

译文front matter保留Edition、Revision与base，增加Language: en和Source commit。完成后manifest记录中文/英文精确hash、作者/复核者、复核范围和遗漏。结构校验不能冒称语义审阅；AI作者/审读如实归因，不虚构人工签核。

## 独立阅读产物

中文默认。`build.py`产生中文三相；`build_en.py`独立产生英文三相。Canonical / Practice / Index保持独立而稳定的职责；语言切换保留当前相和所在章节。只在完整译文通过复核与来源校验后开放English入口。

历史发布HTML字节不重写。本轮reader revision使用新带日期文件名，文本edition仍为9.6；每种语言的当前入口与对应reader revision内容相同。原文变化后旧译文必须标明对应旧源或等待重编译，不静默表示同步。
