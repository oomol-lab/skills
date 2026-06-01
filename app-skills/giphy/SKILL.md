---
name: giphy
description: "GIPHY (giphy.com). Use this skill for ANY GIPHY request — searching and reading data. Whenever a task involves GIPHY, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "GIPHY"
  author: "OOMOL"
  version: "1.0.0"
  service: "giphy"
  categories: "Design & Media, Social"
  homepage: "https://giphy.com"
  icon: "https://static.oomol.com/logo/third-party/giphy.png"
---

# GIPHY

Operate **GIPHY** through your OOMOL-connected account. This skill calls the `giphy` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Social. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected GIPHY. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "giphy" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "giphy" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_gif`](actions/get_gif.md) — Get a GIPHY GIF by GIF Object id. This is not the random_id value.
- [`get_random_gif`](actions/get_random_gif.md) — Fetch a random GIPHY GIF, optionally filtered by tag.
- [`get_random_id`](actions/get_random_id.md) — Create a GIPHY random_id value for personalization across requests.
- [`get_random_sticker`](actions/get_random_sticker.md) — Fetch a random GIPHY sticker, optionally filtered by tag.
- [`list_categories`](actions/list_categories.md) — List GIPHY content categories.
- [`list_gifs_by_ids`](actions/list_gifs_by_ids.md) — Fetch multiple GIPHY GIFs by id.
- [`list_related_tags`](actions/list_related_tags.md) — List GIPHY tags related to a term.
- [`list_trending_gifs`](actions/list_trending_gifs.md) — List trending GIPHY GIFs.
- [`list_trending_stickers`](actions/list_trending_stickers.md) — List trending GIPHY stickers.
- [`list_trending_tags`](actions/list_trending_tags.md) — List trending search terms on GIPHY.
- [`search_gifs`](actions/search_gifs.md) — Search GIPHY GIFs by query text.
- [`search_stickers`](actions/search_stickers.md) — Search GIPHY stickers by query text.
- [`search_tags`](actions/search_tags.md) — Autocomplete GIPHY tags for a partial query.
- [`translate_gif`](actions/translate_gif.md) — Translate a phrase into a single best-match GIPHY GIF.
- [`translate_sticker`](actions/translate_sticker.md) — Translate a phrase into a single best-match GIPHY sticker.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change GIPHY state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — GIPHY is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=giphy
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- GIPHY homepage: https://giphy.com
