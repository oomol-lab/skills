---
name: oo-u301
description: "U301 (u301.com). Use this skill for ANY U301 request — reading, creating, updating, and deleting data. Whenever a task involves U301, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "U301"
  author: "OOMOL"
  version: "1.0.0"
  service: "u301"
  categories: "Marketing, Productivity"
  homepage: "https://u301.com"
  icon: "https://static.oomol.com/logo/third-party/u301.svg"
---

# U301

Operate **U301** through your OOMOL-connected account. This skill calls the `u301` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Productivity. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected U301. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "u301" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "u301" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_link`](actions/delete_link.md) — Delete one U301 short link by its domain/slug identifier.
- [`list_domains`](actions/list_domains.md) — List the U301 short-link domains available in the connected workspace.
- [`shorten_link`](actions/shorten_link.md) — Create one U301 short link for a destination URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change U301 state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — U301 is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=u301
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- U301 homepage: https://u301.com
