---
name: tikhub
description: "TikHub (tikhub.io). Use this skill for ANY TikHub request — reading, creating, and updating data. Whenever a task involves TikHub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "TikHub"
  author: "OOMOL"
  version: "1.0.0"
  service: "tikhub"
  categories: "Data & Analytics, Social"
  homepage: "https://tikhub.io/"
  icon: "https://static.oomol.com/logo/third-party/tikhub.jpeg"
---

# TikHub

Operate **TikHub** through your OOMOL-connected account. This skill calls the `tikhub` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Social. Exposes 32 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected TikHub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "tikhub" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "tikhub" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`calculate_price`](actions/calculate_price.md) — Calculate TikHub daily request pricing for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope.
- [`fetch_douyin_hot_total_list`](actions/fetch_douyin_hot_total_list.md) — Fetch the public Douyin hot total list through TikHub. Requires the /api/v1/douyin/billboard/ TikHub path scope.
- [`fetch_douyin_user_posts`](actions/fetch_douyin_user_posts.md) — Fetch public Douyin posts for a user through TikHub without exposing upstream cookies. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_user_profile_by_short_id`](actions/fetch_douyin_user_profile_by_short_id.md) — Fetch a public Douyin user profile by short ID through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_user_profile_by_uid`](actions/fetch_douyin_user_profile_by_uid.md) — Fetch a public Douyin user profile by UID through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_video_by_share_url`](actions/fetch_douyin_video_by_share_url.md) — Fetch a public Douyin video detail by share URL through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_video_comment_replies`](actions/fetch_douyin_video_comment_replies.md) — Fetch public Douyin comment replies through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_video_comments`](actions/fetch_douyin_video_comments.md) — Fetch public Douyin video comments through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_douyin_video_detail`](actions/fetch_douyin_video_detail.md) — Fetch a public Douyin video detail through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.
- [`fetch_tiktok_post_comment_replies`](actions/fetch_tiktok_post_comment_replies.md) — Fetch public TikTok comment replies through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_post_comments`](actions/fetch_tiktok_post_comments.md) — Fetch public TikTok post comments through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_post_detail`](actions/fetch_tiktok_post_detail.md) — Fetch a public TikTok post detail through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_tag_detail`](actions/fetch_tiktok_tag_detail.md) — Fetch a public TikTok tag detail through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_tag_posts`](actions/fetch_tiktok_tag_posts.md) — Fetch public TikTok posts for a tag through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_user_posts`](actions/fetch_tiktok_user_posts.md) — Fetch public TikTok posts for a user through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_tiktok_user_profile`](actions/fetch_tiktok_user_profile.md) — Fetch a public TikTok user profile through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`fetch_xiaohongshu_hot_list`](actions/fetch_xiaohongshu_hot_list.md) — Fetch the public Xiaohongshu hot list through TikHub. Requires the /api/v1/xiaohongshu/web_v2/ TikHub path scope.
- [`fetch_xiaohongshu_note_comment_replies`](actions/fetch_xiaohongshu_note_comment_replies.md) — Fetch public Xiaohongshu note comment replies through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`fetch_xiaohongshu_note_comments`](actions/fetch_xiaohongshu_note_comments.md) — Fetch public Xiaohongshu note comments through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`fetch_xiaohongshu_sub_comments`](actions/fetch_xiaohongshu_sub_comments.md) — Fetch public Xiaohongshu sub-comments through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`fetch_xiaohongshu_user_info`](actions/fetch_xiaohongshu_user_info.md) — Fetch public Xiaohongshu user information through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`fetch_xiaohongshu_user_notes`](actions/fetch_xiaohongshu_user_notes.md) — Fetch public Xiaohongshu user notes through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`get_all_endpoints_info`](actions/get_all_endpoints_info.md) — Get TikHub cost and metadata for all endpoints. Requires the /api/v1/tikhub/user/ TikHub path scope.
- [`get_endpoint_info`](actions/get_endpoint_info.md) — Get TikHub cost and metadata for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope.
- [`get_user_daily_usage`](actions/get_user_daily_usage.md) — Get the current TikHub account daily API usage. Requires the /api/v1/tikhub/user/ TikHub path scope.
- [`get_user_info`](actions/get_user_info.md) — Get the current TikHub account and API key information. Requires the /api/v1/tikhub/user/ TikHub path scope.
- [`search_douyin_users`](actions/search_douyin_users.md) — Search public Douyin users through TikHub. Requires the /api/v1/douyin/search/ TikHub path scope.
- [`search_douyin_videos`](actions/search_douyin_videos.md) — Search public Douyin videos through TikHub. Requires the /api/v1/douyin/search/ TikHub path scope.
- [`search_tiktok_users`](actions/search_tiktok_users.md) — Search public TikTok users through TikHub without exposing upstream cookies. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`search_tiktok_videos`](actions/search_tiktok_videos.md) — Search public TikTok videos through TikHub without exposing upstream cookies. Requires the /api/v1/tiktok/web/ TikHub path scope.
- [`search_xiaohongshu_notes`](actions/search_xiaohongshu_notes.md) — Search public Xiaohongshu notes through TikHub. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.
- [`search_xiaohongshu_users`](actions/search_xiaohongshu_users.md) — Search public Xiaohongshu users through TikHub. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change TikHub state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — TikHub is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=tikhub
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- TikHub homepage: https://tikhub.io/
