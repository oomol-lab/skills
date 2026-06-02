---
name: oo-callpage
description: "CallPage (callpage.io). Use this skill for ANY CallPage request — reading, creating, and updating data. Whenever a task involves CallPage, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "CallPage"
  author: "OOMOL"
  version: "1.0.0"
  service: "callpage"
  categories: "Communication, Productivity"
  homepage: "https://www.callpage.io"
  icon: "https://static.oomol.com/logo/third-party/callpage.svg"
---

# CallPage

Operate **CallPage** through your OOMOL-connected account. This skill calls the `callpage` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected CallPage. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "callpage" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "callpage" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_widget_call`](actions/create_widget_call.md) — Create a CallPage callback request for one widget and phone number.
- [`get_call`](actions/get_call.md) — Get one CallPage call by identifier.
- [`get_user`](actions/get_user.md) — Get one CallPage user by identifier or email address.
- [`get_widget`](actions/get_widget.md) — Get one CallPage widget by identifier.
- [`list_calls`](actions/list_calls.md) — List CallPage calls with optional filters such as widget, user, status, phone number, and time range.
- [`list_users`](actions/list_users.md) — List CallPage users with pagination.
- [`list_widgets`](actions/list_widgets.md) — List CallPage widgets with pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change CallPage state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — CallPage is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=callpage
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- CallPage homepage: https://www.callpage.io
