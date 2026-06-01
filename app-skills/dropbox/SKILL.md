---
name: dropbox
description: "Dropbox (dropbox.com). Use this skill for ANY Dropbox request — reading, creating, updating, and deleting data. Whenever a task involves Dropbox, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Dropbox"
  author: "OOMOL"
  version: "1.0.0"
  service: "dropbox"
  categories: "Storage, Productivity"
  homepage: "https://www.dropbox.com"
  icon: "https://static.oomol.com/logo/third-party/Dropbox.svg"
---

# Dropbox

Operate **Dropbox** through your OOMOL-connected account. This skill calls the `dropbox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Productivity. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Dropbox. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "dropbox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "dropbox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`copy`](actions/copy.md) — Copy one file or folder to another Dropbox path.
- [`create_folder`](actions/create_folder.md) — Create one folder in Dropbox.
- [`create_shared_link`](actions/create_shared_link.md) — Create one Dropbox shared link with optional custom settings.
- [`delete`](actions/delete.md) — Delete one file or folder from Dropbox.
- [`download_file`](actions/download_file.md) — Download one Dropbox file and upload it to transit storage.
- [`get_current_account`](actions/get_current_account.md) — Get basic profile information for the current Dropbox account.
- [`get_metadata`](actions/get_metadata.md) — Get Dropbox metadata for one file or folder.
- [`list_folder`](actions/list_folder.md) — List files and folders inside one Dropbox folder.
- [`list_folder_continue`](actions/list_folder_continue.md) — Continue a previous Dropbox folder listing with a cursor.
- [`list_shared_links`](actions/list_shared_links.md) — List Dropbox shared links for the current user or a specific path.
- [`move`](actions/move.md) — Move one file or folder to another Dropbox path.
- [`upload_file`](actions/upload_file.md) — Upload one file to Dropbox from inline text or base64 content.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Dropbox state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Dropbox is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=dropbox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Dropbox homepage: https://www.dropbox.com
