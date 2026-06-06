---
name: oo-the-cat-api
description: "The Cat API (thecatapi.com). Use this skill for ANY The Cat API request — searching and reading data. Whenever a task involves The Cat API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "The Cat API"
  author: "OOMOL"
  version: "1.0.0"
  service: "the_cat_api"
  categories: "Design & Media, Data & Analytics"
  homepage: "https://thecatapi.com/"
---

# The Cat API

Operate **The Cat API** through your OOMOL-connected account. This skill calls the `the_cat_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected The Cat API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "the_cat_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "the_cat_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_breed`](actions/get_breed.md) — Get one cat breed by its The Cat API breed identifier.
- [`get_image`](actions/get_image.md) — Get one cat image by its The Cat API image identifier.
- [`list_breeds`](actions/list_breeds.md) — List cat breeds supported by The Cat API.
- [`search_breeds`](actions/search_breeds.md) — Search cat breeds by breed name.
- [`search_images`](actions/search_images.md) — Search for cat images with optional breed, category, type, size, and paging filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change The Cat API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — The Cat API is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=the_cat_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- The Cat API homepage: https://thecatapi.com/
