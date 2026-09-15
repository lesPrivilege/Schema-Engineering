# 9.8内容接续与发布 · 2026-09-15

起点main `ec8d57ea9d2e69e84ebdc187472c5c50795804f7`，README与CHANGELOG已有发布状态修正，见[前态哈希](baseline.json)。用户明确要求保持版面、公开内容独立承重，直接main修改、push部署；Astra执行，不开额外分支。

采用范围：README版本/产品入口、Index发布及裁决接续、既有页脚CourtWork链接与reader日期、内部发布索引。Canonical/Practice、CSS/JS、图、译文与旧HTML按前态hash检查。论文版号9.8及Edition 2026-09-14不变；reader 2026-09-15是内容发布容器，不代表改版。

## 验证

[检查日志](checks.log)：英文构建按旧译文绑定SKIP；中文构建、validate的14项阅读器检查、8项译文门禁测试与3项资源测试通过。[字节核对](verification.json)确认Canonical/Practice源码、CSS/JS及15份历史HTML不变；两份正文渲染仅元信息由“阅读面候选 2026-09-11”改为“阅读版本 2026-09-15”，内容和结构一致。

[初次比较](initial-comparison.json)将上述reader日期一并纳入正文片段而报告差异，后按逐tag diff确认只有该元信息；最终核对明确排除这项有意变更。没有忽略其他正文差异。公开页脚链接沿现有span，不新增版面区块、CSS或交互。此前浏览器控制超时，本轮采用源/结构与字节验证，不声称新增视觉验收。

本地已有README/CHANGELOG修改的发布事实已保留并接续；README的工作流回执转到内部发布说明，公开文案仅版本入口和产品定义。新阅读文件独立保存，不覆盖9月14日历史产物。CourtWork当前main固定`caf3edbceb8cf9b535a28c547088874852752a1e`，PAPER仍采用9.6。

## 发布

本次用户已授权push部署；实际Actions及线上核对结果在发布完成后追加。本回执后续提交会自动触发同源码重建，不改变论文内容。
