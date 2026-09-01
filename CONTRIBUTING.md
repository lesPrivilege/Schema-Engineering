# Observation and Revision Protocol

本仓库以“观察—讨论—裁决—修订”为基本工作单元。新增材料不直接取得正文地位。

## 观察登记

先在 `papers/src/practice-index.md` 登记观察。条目至少包含：

```text
ID 与观察日期
来源类别、版本或访问日期
可观察机制
最小支持命题
不支持的外推
复现、消融或证伪方法
讨论与裁决
正文处置
```

观察与解释必须分开。普通个例、帖子和供应方数字只进入 Index；正文只吸收脱离实例后仍成立的泛化结果。

## 裁决层级

1. **不改**：现有原则已能推出，或证据不足。
2. **仅入 Index**：材料可供溯源或检验，但尚不足以改变实践文本。
3. **修订 Practice**：机制会改变当前实现、测试或失败边界，并可写成最小、泛化、自足的文本。
4. **修订 Canonical**：现有 Kernel 无法表达该机制，或既有证伪条件已经触发。

Canonical 修订必须说明没有变化的 ontology、Contract 和原则；Practice 修订必须同步记录其日期、检验和失败条件。

## 提交边界

一次提交只承担一种责任。建议使用以下前缀：

- `observe:` 登记尚未裁决的观察或来源；
- `adjudicate:` 记录讨论、检验结果与处置；
- `revise:` 修订 Canonical、Practice 或 Index；
- `release:` 更新版本、生成物与修订日志；
- `infra:` 修改构建、校验或发布设施；
- `docs:` 修改仓库说明而不改变论文论断。

正文变更与基础设施变更应尽量分开提交。涉及正文的提交必须同时更新 Practice Index 的增量修订记录；版本级变化同时更新 `CHANGELOG.md`。

## 发版检查

```bash
python3 papers/build.py
python3 papers/validate.py
```

发版前确认：

1. 三份文本的 Edition 与 base 一致；
2. Canonical 只有必要最小增量；
3. Practice 不依赖 Index 才能成立；
4. 个例、来源与易折旧数字已经进入 Index；
5. Index 记录命题边界、检验、裁决和正文处置；
6. 当前入口与带日期发布文件内容一致；
7. Pages 工作流通过后再把发版视为完成。
