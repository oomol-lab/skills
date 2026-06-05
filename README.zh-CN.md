# OOMOL Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[English](./README.md) | **中文**

[OOMOL](https://oomol.com) 官方 **app-skills** 技能库 —— 让 AI 助手通过你自己已连接的账户，操作数百个第三方服务（GitHub、Slack、Notion、Stripe、Google Workspace、Elasticsearch 等等）的 agent skills 集合。

## 什么是 app-skill？

每个 skill 都是一个自包含的 [Agent Skill](https://docs.claude.com/en/docs/claude-code/skills)：一份描述「何时使用」与「如何调用底层服务」的 `SKILL.md`，外加每个 action 的参考文件。Skill 本身不携带代码，也不携带凭证 —— 它驱动 [`oo` CLI](https://github.com/oomol-lab/oo-cli) 去调用 OOMOL 托管的服务连接器（connector）。凭证由 OOMOL 在服务端注入，agent 全程不会接触到原始 API token。

所有服务的调用模型完全一致：

```bash
# 1. 查询某个 action 权威的输入/输出 schema
oo connector schema "<service>" --action "<action_name>"

# 2. 用符合该 schema 的 JSON 载荷运行 action
oo connector run "<service>" --action "<action_name>" --data '<json>' --json
```

由于契约是在运行时通过 `oo connector schema` 动态获取的，即使上游 API 演进，skill 依然保持正确 —— agent 在构造请求前总会读取最新的 schema。

## 使用一个 skill

1. **安装 `oo` CLI** 并登录 —— 见 [oomol-lab/oo-cli](https://github.com/oomol-lab/oo-cli)。
2. **连接目标服务**（一次性的 OAuth / API-key 授权，由 OOMOL 持有，而非 skill）。
3. **从 registry 安装 skill**，交给 agent 调用即可。每个 `SKILL.md` 都带有 `description`，明确告诉 agent 何时应使用该 skill，因此路由是自动完成的。

这些 skill 会发布到两个 registry：

- **OOMOL Skills Hub** —— `https://registry.oomol.com`
- **ClawHub** —— 开放式 skill registry

可用 `oo` 查找并安装 skill（例如借助 `oo-find-skills` 工作流），或直接浏览上述 registry。

## 发布流水线

发布由两个 GitHub Actions 工作流驱动（在 **Actions** 标签页手动运行，均支持 `dry-run` / `publish-single` / `publish-catalog` 三种模式）：

- **Publish Skills to OOMOL** —— 将每个 skill 的 `metadata.version` 与 `registry.oomol.com` 比对，对新增或版本提升的 skill 执行 `npm publish`。该 registry 无速率限制，运行完全幂等。
- **Publish Skills to ClawHub** —— 用 `clawhub sync` 检测变更的 skill，并按其声明的 `metadata.version` 发布。ClawHub 对*新 skill* 的发布按账户限流，因此工作流可将大规模技能库分摊到多个账户（`CLAWHUB_TOKENS`），并可在配额重置后安全地重跑。

发布逻辑位于 `contrib/scripts/`，并有测试覆盖。

## 许可证

[MIT](./LICENSE) © OOMOL Lab
