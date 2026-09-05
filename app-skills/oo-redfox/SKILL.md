---
name: oo-redfox
description: "RedFoxHub (redfox.hk). Use this skill for ANY RedFoxHub request — searching and reading data. Whenever a task involves RedFoxHub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "RedFoxHub"
  author: "OOMOL"
  version: "1.0.3"
  services: ["redfox"]
  icon: "https://static.oomol.com/logo/third-party/redfox.png"
---

# RedFoxHub

Operate **RedFoxHub** through your OOMOL-connected account. This skill calls the `redfox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected RedFoxHub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "redfox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "redfox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `get_bilibili_user` — Get details about a Bilibili account.
- `get_bilibili_work` — Get a Bilibili work by its BV ID or URL.
- `get_douyin_user` — Get details about a Douyin account.
- `get_douyin_work` — Get a Douyin work by its ID or URL.
- `get_kuaishou_work` — Get details about a Kuaishou work.
- `get_toutiao_work` — Get details about a Toutiao work.
- `get_wechat_account` — Get details about a WeChat Official Account.
- `get_wechat_article` — Get a WeChat Official Account article by its UUID.
- `get_wechat_article_by_url` — Get a WeChat Official Account article by its URL.
- `get_wechat_channel_work` — Get details about a WeChat Channel work.
- `get_xiaohongshu_user` — Get details about a Xiaohongshu account.
- `get_xiaohongshu_work` — Get a Xiaohongshu work by its ID or link.
- `list_bilibili_user_works` — List works published by a Bilibili account.
- `list_douyin_user_works` — List works published by a Douyin account.
- `list_kuaishou_user_works` — List works published by a Kuaishou account.
- `list_toutiao_user_works` — List works published by a Toutiao account.
- `list_toutiao_work_comments` — List comments on a Toutiao work.
- `list_wechat_account_articles` — List articles published by a WeChat Official Account.
- `list_wechat_channel_user_works` — List works published by a WeChat Channel account.
- `search_bilibili_users` — Search Bilibili accounts by keyword.
- `search_bilibili_works` — Search Bilibili works by keyword.
- `search_douyin_ai_creations` — Search Douyin works related to AI creation.
- `search_douyin_users` — Search Douyin accounts by keyword.
- `search_douyin_works` — Search Douyin works by keyword.
- `search_kuaishou_users` — Search Kuaishou accounts by name.
- `search_kuaishou_works` — Search Kuaishou works by keyword.
- `search_tiktok_users` — Search TikTok accounts by keyword.
- `search_toutiao_users` — Search Toutiao accounts by keyword.
- `search_toutiao_works` — Search Toutiao works by keyword.
- `search_wechat_accounts` — Search WeChat Official Accounts by keyword.
- `search_wechat_ai_creations` — Search WeChat Official Account articles related to AI creation.
- `search_wechat_articles` — Search WeChat Official Account articles by keyword.
- `search_wechat_channel_users` — Search WeChat Channel accounts by name.
- `search_wechat_channel_works` — Search WeChat Channel works by keyword.
- `search_xiaohongshu_ai_creations` — Search Xiaohongshu works related to AI creation.
- `search_xiaohongshu_users` — Search Xiaohongshu accounts by keyword.
- `search_xiaohongshu_works` — Search Xiaohongshu works in the curated database.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change RedFoxHub state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — RedFoxHub is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=redfox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- RedFoxHub homepage: https://redfox.hk
