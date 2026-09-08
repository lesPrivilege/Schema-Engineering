# Schema Engineering · 对外阅读与发布面

2026-09-08 · 发布准备稿。本文只管理论文仓的公众入口、文本/图/版本及跨仓引用，不记录CourtWork产品任务或改变Canonical/Practice。具体编订与发布仍沿 [CONTRIBUTING](../../CONTRIBUTING.md)；当前候选/已发布必须分别查验。

## 对外定位草稿

**Schema Engineering**  
**Governing agentic work through stable, reviewable state.**

中文：

> Schema Engineering 是一组持续修订的工作论文，讨论 Agent 如何参与可提交、可恢复、可审阅的正式工作。它区分工作状态、供模型使用的上下文、候选提案与取得效力的变更，并考察这些边界如何影响执行、审阅、连续性与验证。

English:

> Schema Engineering is a series of evolving working papers on agent participation in work that can be committed, recovered, and reviewed. It distinguishes governed work state, model context, candidate proposals, and changes that acquire effect, and examines how these boundaries shape execution, human review, continuity, and evaluation.

首屏入口：Read the paper / 中文 / Practice / Experimental implementation。read链接指实际已发布Pages与带版本文件；英文入口只有对应内容完成翻译与复核后才出现，不能把英文README当成英文全文。

## 阅读结构

| 层 | 内容 | 责任 |
|---|---|---|
| README | 定位、短摘要、Canonical/Practice/Index入口、版本与引用、实现桥 | 最短理解路径；不复制完整论文 |
| 阅读Pages | 持续可读的文本、目录、图和版本切换 | 复用现有`papers/build.py`、`validate.py`与Pages链；设计更新不得重写历史发布物 |
| 固定文本/产物 | Canonical、Practice、Index及带日期/版本的文件 | 保持现有编订源和发布对应；PDF/英文全文未生成时不放下载按钮 |
| Practice/evidence | 来源、边界、检验和裁决 | 仍由Practice Index承担唯一逐项修订账本 |
| Citation/version | 真实作者/标题/版本/日期/固定URL，按需要生成引用信息 | 不编造DOI、学术发表或许可证；候选版本不写作已发布 |
| CourtWork桥 | 实验中的实现、采用的Paper SHA与固定工程证据 | 实现探索不等于Paper命题已被验证，不把产品状态复制到本仓 |

## 图与文案

首轮可围绕“State → Context → Proposal → Committed Change”与“Store → Govern → Retrieve → Compile”制作少量核心图，但每张图先对齐当版正文、标明转换与责任边界，再进入发布产物。箭头表示机制关系，不表示无需授权自动取得效力。

不采用讨论稿“Schema = model context = human review surface = persistent work state”的等号。状态与不同投影共享来源而承担不同责任；公众图不能为简洁而改变正文含义。CourtWork视觉可共用字标尺度与图表语言，论文页面仍以文本、注释、版本和阅读层级为主。

## 双语与版本

正文继续遵守中文为主的现有编订协议。若增加英文README或全文翻译，记录原文固定SHA、译文hash、人工语义复核日期与遗漏范围；结构/链接检查不能代替译文审阅。原文修订后把译文标为对应旧版或待同步，不同时维护两份独立Canonical。

本次读取根README为本地9.6候选；CourtWork `PAPER.md`仍固定9.3。发布准备不使这两个版本自动一致。对外入口应同时区分最新已发布阅读版本、当前编订候选与实现采用版本；具体值在每次发布前从源与远端工作流核对。

## 发版与交叉引用

当前Pages工作流在`main`上接收到`papers/**`、README、CHANGELOG或工作流相关变化时会构建发布。因此即使是本页这类说明文档，推到main也可能触发Pages。准备稿先本地/候选审阅；本轮用户安排的CourtWork候选push不自动触发SE 9.6发版。

实际发布沿现有build→validate→Pages工作流成功的判定，保留历史带日期产物；不为了两仓同日发布覆盖旧文件或临时升级Paper版本。只改变入口文案和链接时不触发论文版本号变化，但仍须核对发布工作流实际影响。

跨仓固定入口：[CourtWork候选](https://github.com/lesPrivilege/Courtwork/tree/codex/fresh-courtwork)、[其采用的Paper版本](https://github.com/lesPrivilege/Courtwork/blob/codex/fresh-courtwork/PAPER.md)。产品发布/迭代计划保存在CourtWork `engineering/release/2026-09-08/`；本仓只保存论文发布责任。

## 来源消费

Chat《筹备两个仓库发布》（`6a9f20a0-898c-83ec-9813-a401199d00d2`）提供发布结构候选。REEF官方发布面的限定核验固定到`8e87829572b210572cad2008c28d39888b2b8396`：双语README、Docs与公开roadmap可作信息结构参考，详见 [其README](https://github.com/Human-Agent-Society/reef/blob/8e87829572b210572cad2008c28d39888b2b8396/README.md) 与 [结构同步检查](https://github.com/Human-Agent-Society/reef/blob/8e87829572b210572cad2008c28d39888b2b8396/.github/scripts/check_readme_i18n.py)。仅消费发布机制，不将REEF实例作为SE正文命题或验证结论；无需为本次入口筹备新增Practice Index观察。
