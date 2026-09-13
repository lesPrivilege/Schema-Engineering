# Schema Engineering Papers

Schema Engineering 工作论文的源文件、证据索引、编译脚本与带日期发布产物。

## 文件结构

```text
papers/
├── README.md
├── build.py               # 中文构建
├── build_en.py            # 英文独立构建
├── reader/                # 共用阅读器样式与交互
├── translations/          # 固定中文源的派生译文、hash 与复核记录
├── qa/                    # 浏览器验证与译文发布入口反例
├── validate.py
├── requirements.txt
├── src/
│   ├── canonical.md       # 稳定 Kernel
│   ├── practice.md        # 带日期、泛化的实践快照
│   └── practice-index.md  # 来源、检验、裁决与增量记录
├── archive/ancestry/      # 本编订链建立前的祖本，不参与编译
├── notes/                 # 传播与产品叙事材料，不作命题来源
└── dist/
    ├── index.html                       # 当前 Pages 入口，不纳入版本控制
    ├── schema-engineering-2026-08-29.html
    ├── schema-engineering-2026-09-01.html
    ├── schema-engineering-2026-09-04.html
    ├── schema-engineering-2026-09-05.html
    ├── schema-engineering-2026-09-06.html
    ├── schema-engineering-2026-09-07-v9.5.html
    ├── schema-engineering-2026-09-07.html
    ├── schema-engineering-2026-09-07-reader-2026-09-11-paper-v1[-en].html
    └── schema-engineering-2026-09-13-reader-2026-09-11-paper-v1.html
```

## 三份文本的责任

`canonical.md` 定义不应随单个产品、宿主或社区实践波动的 Kernel。每轮默认保持稳定；只有新证据改变 commitment、continuity、evaluation 或 falsification boundary 时才修订，且只写入必要最小增量。

`practice.md` 是当下社区与工程实践的快照。它从第一性原理出发，只保留脱离原实例后仍成立的最小机制、实现边界、验证方法和失败条件。它不按人物、产品或案例组织，也不以外部来源作为理解正文的前提。

`practice-index.md` 保存会折旧的实例、来源、证据类型、不支持的外推、待验证命题与每轮裁决。Index 可以独立增量更新；其存在不影响前两份文本的自足性。

Canonical 与 Practice 只呈现当前成立的完整文本。材料通过裁决后，重写能够承载命题的最小完整章节，优先合并、替换和删除；修订过程、来源、校验与版本差异只进 Index。现有 ontology、Contract、状态或原则足以表达的机制不增加实体；正文段落只承担定义、推导、边界或结论。中文是叙述主语言，不追求机械全译；用词服从语境且全篇体例稳定，SE 对象优先采用共识说法，并在体系内保持指代与边界一致。

## 工作方法

每次修订按以下顺序进行：

```text
观察实例、实验、产品机制或失败
→ 区分可观察事实与本文推论
→ 抽取脱离实例后仍可检验的最小机制
→ 与现有 Canonical 和 Practice 对照
→ 讨论后裁决：不改 / 仅入 Index / 修订 Practice / 修订 Canonical
→ 记录来源、不支持的外推、检验方法和正文处置
```

裁决规则：

1. 能由现有原则直接推出的内容，默认不修订 Canonical。
2. 只证明某个产品、宿主或个人工作法存在的材料，默认只入 Index。
3. 已反复出现且会改变实现、测试或失败边界的机制，以最小泛化形式写入 Practice。
4. 只有现有 Kernel 无法表达，或现有证伪条件已触发时，才重开 Canonical。
5. 正文不为引入来源增加叙事或修辞；引用、个例和数字默认放入 Index。Frontier lab 或承重研究可在必要时以脚注出现，但不作为外部背书。
6. 每一次正文修订都在 Index 中记录观察、裁决、处置、检验与日期；正文只保留整合后的结果。

仓库级的观察登记、提交边界与发版检查见根目录 `CONTRIBUTING.md`；版本级变化见 `CHANGELOG.md`。

当前编订候选为 9.8（2026-09-14），候选文件为 `schema-engineering-2026-09-14-reader-2026-09-11-paper-v1.html`；尚未推送或部署。9.7 本地候选文件保持原字节。`schema-engineering-2026-09-07.html` 与 `schema-engineering-2026-09-07-reader-*.html` 保留 9.6 的历史发布，`schema-engineering-2026-09-07-v9.5.html` 保留 9.5；历史文件不覆盖，校验器逐一比对其字节。

## 发版方法

1. 确认三份源文件的 `Edition` 和 base 相互一致。
2. 检查 Canonical 是否只有必要最小增量，Practice 是否仍可脱离 Index 阅读。
3. 脱离来源与 diff 通读受影响章节，删除补丁式重复、修订痕迹、非承重铺垫和保护性措辞。
4. 检查是否误增可由现有对象、关系或原则表达的实体。
5. 检查人名、产品名、宿主 API、个人帖子、供应方数字与来源是否已进入 Index。
6. 检查 Index 的每个条目是否包含最小命题、不支持的外推、检验和文本处置。
7. 检查中英文选择和行文体例是否稳定，同一 SE 对象是否出现无意别名或边界漂移。
8. 编译带日期的单文件 HTML，保留旧版发布产物，并以同一内容生成 Pages 当前入口。

## 编译

```bash
python3 -m pip install -r papers/requirements.txt
python3 papers/build_en.py
python3 papers/build.py
python3 papers/validate.py
# → papers/dist/schema-engineering-2026-09-14-reader-2026-09-11-paper-v1.html
# English: withheld（译文仍绑定 9.6）
# → papers/dist/index.html
```

依赖：Python 3.10+ 与锁定版本的 `markdown2`。编译产物是无外部运行依赖的单文件 HTML，包含 Canonical、Practice 和 Practice Index 三个视图。推送到 `main` 后，GitHub Actions 会重新构建、校验并发布 Pages；本地生成的 `dist/index.html` 不纳入版本控制，避免重复的可变发布文件。

英文三份文本保存为固定中文源的派生译文 cache，由 `build_en.py` 独立编译。中文仍是唯一编订源；英文不另立论断或修订账本。来源、复核与同步条件见 [英文编译约定](translations/README.md)。`index-en.html` 与中文当前入口一样不纳入版本控制。
