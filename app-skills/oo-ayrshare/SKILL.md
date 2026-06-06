---
name: oo-ayrshare
description: "Ayrshare (ayrshare.com). Use this skill for ANY Ayrshare request — reading, creating, and updating data. Whenever a task involves Ayrshare, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ayrshare"
  author: "OOMOL"
  version: "1.0.0"
  service: "ayrshare"
  categories: "Social, Marketing"
  homepage: "https://www.ayrshare.com/"
---

# Ayrshare

Operate **Ayrshare** through your OOMOL-connected account. This skill calls the `ayrshare` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Marketing. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Ayrshare. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ayrshare" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ayrshare" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`check_post_length`](actions/check_post_length.md) — Check weighted social post length and platform validity using Ayrshare's post length validator.
- [`get_user_profile`](actions/get_user_profile.md) — Get Ayrshare account or user profile details, including linked social accounts and usage metadata.
- [`list_post_history`](actions/list_post_history.md) — List Ayrshare post history with optional filters for date range, status, type, and social platforms.
- [`publish_post`](actions/publish_post.md) — Publish or schedule a social media post through Ayrshare using a JSON-friendly first-pass field set.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Ayrshare state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Ayrshare is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ayrshare
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Ayrshare homepage: https://www.ayrshare.com/
