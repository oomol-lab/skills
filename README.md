# OOMOL Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**English** | [中文](./README.zh-CN.md)

The official catalog of [OOMOL](https://oomol.com) **app-skills** — agent skills that let an AI assistant operate hundreds of third-party services (GitHub, Slack, Notion, Stripe, Google Workspace, Elasticsearch, and many more) through your own connected accounts.

## What is an app-skill?

Each skill is a self-contained [Agent Skill](https://docs.claude.com/en/docs/claude-code/skills): a `SKILL.md` describing *when* to use it and *how* to call the underlying service, plus per-action reference files. Skills don't ship code or credentials — they drive the [`oo` CLI](https://github.com/oomol-lab/oo-cli), which talks to an OOMOL-managed connector for the service. OOMOL injects your credentials server-side, so the agent never sees raw API tokens.

The model is the same for every service:

```bash
# 1. Inspect the authoritative input/output schema for an action
oo connector schema "<service>" --action "<action_name>"

# 2. Run the action with a JSON payload matching that schema
oo connector run "<service>" --action "<action_name>" --data '<json>' --json
```

Because the contract is discovered at runtime via `oo connector schema`, a skill stays correct even as the upstream API evolves — the agent always reads the live schema before building a request.

## Using a skill

1. **Install the `oo` CLI** and sign in — see [oomol-lab/oo-cli](https://github.com/oomol-lab/oo-cli).
2. **Connect the service** you want (a one-time OAuth/API-key authorization held by OOMOL, not by the skill).
3. **Install the skill** from a registry and let your agent invoke it. Each `SKILL.md` carries a `description` telling the agent exactly when the skill applies, so routing is automatic.

The skills are published to two registries:

- **OOMOL Skills Hub** — `https://registry.oomol.com`
- **ClawHub** — the open skill registry

Find and install skills with `oo` (e.g. via the `oo-find-skills` workflow) or browse the registries directly.

## Publishing pipeline

Releases are driven by two GitHub Actions workflows (run manually from the **Actions** tab, each with a `dry-run` / `publish-single` / `publish-catalog` mode):

- **Publish Skills to OOMOL** — diffs each skill's `metadata.version` against `registry.oomol.com` and publishes anything new or bumped via `npm publish`. The registry has no rate limit, so runs are fully idempotent.
- **Publish Skills to ClawHub** — uses `clawhub sync` to detect changed skills and publishes them at their declared `metadata.version`. ClawHub caps *new-skill* publishes per account, so the workflow can spread a large catalog across multiple accounts (`CLAWHUB_TOKENS`) and is safe to re-run as quotas reset.

The publishing logic lives in `contrib/scripts/` and is covered by tests.

## License

[MIT](./LICENSE) © OOMOL Lab
