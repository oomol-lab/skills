---
name: short-io
description: "Short.io (short.io). Use this skill for ANY Short.io request — reading, creating, updating, and deleting data. Whenever a task involves Short.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Short.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "short_io"
  categories: "Marketing, Data & Analytics"
  homepage: "https://short.io"
  icon: "https://static.oomol.com/logo/third-party/short_io.svg"
---

# Short.io

Operate **Short.io** through your OOMOL-connected account. This skill calls the `short_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Short.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "short_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "short_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_link`](actions/create_link.md) — Create a new Short.io link on one of the authenticated domains.
- [`delete_link`](actions/delete_link.md) — Delete a Short.io link by link ID.
- [`get_domain`](actions/get_domain.md) — Get Short.io domain details by domain ID.
- [`get_link`](actions/get_link.md) — Get Short.io link details by link ID.
- [`get_link_statistics`](actions/get_link_statistics.md) — Get click statistics for a Short.io link.
- [`list_domains`](actions/list_domains.md) — List domains available to the authenticated Short.io API key.
- [`list_links`](actions/list_links.md) — List links for a Short.io domain with optional pagination and sort order.
- [`update_link`](actions/update_link.md) — Update an existing Short.io link by link ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Short.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Short.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=short_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Short.io homepage: https://short.io
