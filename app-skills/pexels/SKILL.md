---
name: pexels
description: "Pexels (pexels.com). Use this skill for ANY Pexels request — searching and reading data. Whenever a task involves Pexels, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Pexels"
  author: "OOMOL"
  version: "1.0.0"
  service: "pexels"
  categories: "Design & Media"
  homepage: "https://www.pexels.com"
  icon: "https://static.oomol.com/logo/third-party/Pexels.svg"
---

# Pexels

Operate **Pexels** through your OOMOL-connected account. This skill calls the `pexels` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Pexels. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "pexels" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "pexels" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`collection_media`](actions/collection_media.md) — Retrieve the photo and video items inside a Pexels collection, with optional type and sort filters.
- [`curated_photos`](actions/curated_photos.md) — Retrieve the current curated photo feed from Pexels with pagination controls.
- [`featured_collections`](actions/featured_collections.md) — Retrieve featured Pexels collections with pagination controls.
- [`get_photo`](actions/get_photo.md) — Retrieve the full metadata for a single Pexels photo by photo id.
- [`get_video`](actions/get_video.md) — Retrieve the full metadata for a single Pexels video by video id.
- [`my_collections`](actions/my_collections.md) — Retrieve collections owned by the authenticated Pexels account.
- [`popular_videos`](actions/popular_videos.md) — Retrieve the current popular Pexels videos with pagination and optional dimension or duration filters.
- [`search_photos`](actions/search_photos.md) — Search Pexels photos by keyword with optional orientation, size, color, locale, and pagination filters.
- [`search_videos`](actions/search_videos.md) — Search Pexels videos by keyword with optional orientation, size, and pagination filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Pexels state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Pexels is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=pexels
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Pexels homepage: https://www.pexels.com
