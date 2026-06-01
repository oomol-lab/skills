---
name: unsplash
description: "Unsplash (unsplash.com). Use this skill for ANY Unsplash request — searching and reading data. Whenever a task involves Unsplash, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Unsplash"
  author: "OOMOL"
  version: "1.0.0"
  service: "unsplash"
  categories: "Design & Media"
  homepage: "https://unsplash.com"
  icon: "https://static.oomol.com/logo/third-party/unsplash.svg"
---

# Unsplash

Operate **Unsplash** through your OOMOL-connected account. This skill calls the `unsplash` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Unsplash. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "unsplash" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "unsplash" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_photo`](actions/get_photo.md) — Fetch the detailed payload for a single Unsplash photo.
- [`get_random_photo`](actions/get_random_photo.md) — Fetch one or more random Unsplash photos using optional filters.
- [`get_topic_photos`](actions/get_topic_photos.md) — List photos from a specific Unsplash topic.
- [`list_photos`](actions/list_photos.md) — List the latest public photos from Unsplash.
- [`list_topics`](actions/list_topics.md) — List topics curated by Unsplash.
- [`search_photos`](actions/search_photos.md) — Search photos on Unsplash using keyword and filter inputs.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Unsplash state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Unsplash is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=unsplash
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Unsplash homepage: https://unsplash.com
