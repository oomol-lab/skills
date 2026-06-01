---
name: agentql
description: "AgentQL (agentql.com). Use this skill for ANY AgentQL request — reading, creating, and updating data. Whenever a task involves AgentQL, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AgentQL"
  author: "OOMOL"
  version: "1.0.0"
  service: "agentql"
  categories: "AI, Developer Tools, Data & Analytics"
  homepage: "https://www.agentql.com"
  icon: "https://static.oomol.com/logo/third-party/agentql.png"
---

# AgentQL

Operate **AgentQL** through your OOMOL-connected account. This skill calls the `agentql` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools, Data & Analytics. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AgentQL. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "agentql" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "agentql" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_browser_session`](actions/create_browser_session.md) — Create an AgentQL Tetra remote browser session and return the session, CDP, and base URLs.
- [`get_usage`](actions/get_usage.md) — Get AgentQL account and API key usage counters for the current billing cycle and lifetime totals.
- [`list_session_usage`](actions/list_session_usage.md) — List AgentQL Tetra session telemetry entries with optional filters and pagination controls.
- [`query_data`](actions/query_data.md) — Query a webpage with AgentQL and return the extracted structured data plus AgentQL metadata.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AgentQL state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AgentQL is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=agentql
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AgentQL homepage: https://www.agentql.com
