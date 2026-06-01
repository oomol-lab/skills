---
name: ngrok
description: "ngrok (ngrok.com). Use this skill for ANY ngrok request — searching and reading data. Whenever a task involves ngrok, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ngrok"
  author: "OOMOL"
  version: "1.0.0"
  service: "ngrok"
  categories: "Developer Tools"
  homepage: "https://ngrok.com"
  icon: "https://static.oomol.com/logo/third-party/Ngrok.svg"
---

# ngrok

Operate **ngrok** through your OOMOL-connected account. This skill calls the `ngrok` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ngrok. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ngrok" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ngrok" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_endpoint`](actions/get_endpoint.md) — Fetch one ngrok endpoint by ID and return the upstream endpoint object.
- [`get_reserved_domain`](actions/get_reserved_domain.md) — Fetch one ngrok reserved domain by ID and return the upstream domain object.
- [`list_endpoints`](actions/list_endpoints.md) — List active ngrok endpoints for the current account, with optional pagination and CEL filtering.
- [`list_reserved_domains`](actions/list_reserved_domains.md) — List reserved ngrok domains for the current account with pagination and CEL filtering.
- [`list_tunnel_sessions`](actions/list_tunnel_sessions.md) — List online ngrok tunnel sessions for the current account with pagination and CEL filtering.
- [`list_tunnels`](actions/list_tunnels.md) — List online ngrok tunnels for the current account with pagination support.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ngrok state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ngrok is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ngrok
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ngrok homepage: https://ngrok.com
