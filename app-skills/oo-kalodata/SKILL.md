---
name: oo-kalodata
description: "Kalodata (kalodata.com). Use this skill for ANY Kalodata request — searching and reading data. Whenever a task involves Kalodata, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Kalodata"
  author: "OOMOL"
  version: "1.0.0"
  services: ["kalodata"]
  icon: "https://static.oomol.com/logo/third-party/kalodata.svg"
---

# Kalodata

Operate **Kalodata** through your OOMOL-connected account. This skill calls the `kalodata` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Kalodata. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "kalodata" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "kalodata" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `get_category` — Get Kalodata analytics for one TikTok product category.
- `get_creator` — Get Kalodata analytics for one TikTok creator.
- `get_livestream` — Get Kalodata analytics for one TikTok livestream.
- `get_product` — Get Kalodata analytics for one TikTok product.
- `get_shop` — Get Kalodata analytics for one TikTok shop.
- `get_video` — Get Kalodata analytics for one TikTok video.
- `list_categories` — List TikTok product categories ranked by Kalodata analytics and optional filters.
- `list_creators` — List TikTok creators ranked by Kalodata analytics and optional filters.
- `list_livestreams` — List TikTok livestreams ranked by Kalodata analytics and optional filters.
- `list_products` — List TikTok products ranked by Kalodata analytics and optional filters.
- `list_shops` — List TikTok shops ranked by Kalodata analytics and optional filters.
- `list_videos` — List TikTok videos ranked by Kalodata analytics and optional filters.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Kalodata state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Kalodata is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=kalodata
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Kalodata homepage: https://www.kalodata.com
