---
name: wiza
description: "Wiza (wiza.co). Use this skill for ANY Wiza request — searching and reading data. Whenever a task involves Wiza, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Wiza"
  author: "OOMOL"
  version: "1.0.0"
  service: "wiza"
  categories: "Marketing, Data & Analytics"
  homepage: "https://wiza.co"
  icon: "https://static.oomol.com/logo/third-party/wiza.png"
---

# Wiza

Operate **Wiza** through your OOMOL-connected account. This skill calls the `wiza` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Wiza. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "wiza" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "wiza" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_credits`](actions/get_credits.md) — Get the remaining Wiza API credit balances for the connected account, matching the WIZA_GET_CREDITS Composio tool.
- [`get_individual_reveal`](actions/get_individual_reveal.md) — Get the status and results of a Wiza individual reveal by ID, matching the WIZA_GET_INDIVIDUAL_REVEAL Composio tool.
- [`get_list`](actions/get_list.md) — Get the status and details of a Wiza list by ID, matching the WIZA_GET_LIST Composio tool.
- [`prospect_search`](actions/prospect_search.md) — Search Wiza prospects with a filters object, matching the WIZA_PROSPECT_SEARCH Composio tool.
- [`start_individual_reveal`](actions/start_individual_reveal.md) — Start a Wiza individual reveal for real-time single contact enrichment, matching the WIZA_START_INDIVIDUAL_REVEAL Composio tool.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Wiza state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Wiza is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=wiza
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Wiza homepage: https://wiza.co
