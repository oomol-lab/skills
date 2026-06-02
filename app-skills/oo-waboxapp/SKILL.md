---
name: oo-waboxapp
description: "waboxapp (waboxapp.com). Use this skill for ANY waboxapp request — reading, creating, and updating data. Whenever a task involves waboxapp, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "waboxapp"
  author: "OOMOL"
  version: "1.0.0"
  service: "waboxapp"
  categories: "Communication, Developer Tools"
  homepage: "https://www.waboxapp.com"
  icon: "https://static.oomol.com/logo/third-party/waboxapp.svg"
---

# waboxapp

Operate **waboxapp** through your OOMOL-connected account. This skill calls the `waboxapp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Developer Tools. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected waboxapp. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "waboxapp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "waboxapp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_account_status`](actions/get_account_status.md) — Fetch the current Waboxapp account status for the connected WhatsApp number.
- [`send_chat`](actions/send_chat.md) — Send a plain text WhatsApp chat message through Waboxapp.
- [`send_image`](actions/send_image.md) — Send an image by public URL through Waboxapp.
- [`send_link`](actions/send_link.md) — Send a link with preview metadata through Waboxapp.
- [`send_media`](actions/send_media.md) — Send a file attachment by public URL through Waboxapp.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change waboxapp state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — waboxapp is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=waboxapp
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- waboxapp homepage: https://www.waboxapp.com
