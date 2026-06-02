---
name: oo-tiktok-business
description: "TikTok Business (business.tiktok.com). Use this skill for ANY TikTok Business request — searching and reading data. Whenever a task involves TikTok Business, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "TikTok Business"
  author: "OOMOL"
  version: "1.0.0"
  service: "tiktok_business"
  categories: "Marketing, Data & Analytics"
  homepage: "https://business.tiktok.com"
  icon: "https://static.oomol.com/logo/third-party/tiktok.svg"
---

# TikTok Business

Operate **TikTok Business** through your OOMOL-connected account. This skill calls the `tiktok_business` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected TikTok Business. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "tiktok_business" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "tiktok_business" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`check_gmv_max_shop_ad_usage`](actions/check_gmv_max_shop_ad_usage.md) — Check whether a TikTok Shop store is already using custom shop ads and can promote all products with GMV Max.
- [`get_gmv_max_bid_recommendation`](actions/get_gmv_max_bid_recommendation.md) — Get TikTok GMV Max budget and bid recommendations before campaign changes.
- [`get_gmv_max_campaign_info`](actions/get_gmv_max_campaign_info.md) — Get detailed information for a TikTok GMV Max campaign.
- [`get_gmv_max_custom_anchor_video_list`](actions/get_gmv_max_custom_anchor_video_list.md) — Get TikTok GMV Max custom anchor videos for campaign creation discovery.
- [`get_gmv_max_exclusive_authorization`](actions/get_gmv_max_exclusive_authorization.md) — Get TikTok GMV Max exclusive authorization status for a store.
- [`get_gmv_max_identities`](actions/get_gmv_max_identities.md) — List TikTok identities available for a GMV Max store.
- [`get_gmv_max_report`](actions/get_gmv_max_report.md) — Get TikTok GMV Max reporting rows for a store and date range.
- [`get_gmv_max_sessions`](actions/get_gmv_max_sessions.md) — Get TikTok GMV Max campaign session details by session ID.
- [`get_gmv_max_shop_video_anchors`](actions/get_gmv_max_shop_video_anchors.md) — Get TikTok GMV Max shop video anchors for campaign creation discovery.
- [`get_gmv_max_videos`](actions/get_gmv_max_videos.md) — Get TikTok GMV Max videos available for a store, identity, or SPU filter.
- [`list_advertisers`](actions/list_advertisers.md) — List TikTok advertisers authorized for the connected TikTok Business user.
- [`list_campaigns`](actions/list_campaigns.md) — List TikTok campaigns for an advertiser so users can discover campaign IDs.
- [`list_gmv_max_occupied_custom_shop_ads`](actions/list_gmv_max_occupied_custom_shop_ads.md) — List custom shop ads occupying TikTok assets before GMV Max setup.
- [`list_gmv_max_sessions`](actions/list_gmv_max_sessions.md) — List TikTok GMV Max campaign sessions for a campaign.
- [`list_gmv_max_stores`](actions/list_gmv_max_stores.md) — List TikTok Shop stores available to a TikTok GMV Max advertiser.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change TikTok Business state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — TikTok Business is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=tiktok_business
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- TikTok Business homepage: https://business.tiktok.com
