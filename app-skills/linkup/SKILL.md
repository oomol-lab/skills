---
name: linkup
description: "Linkup (linkup.so). Use this skill for ANY Linkup request — searching and reading data. Whenever a task involves Linkup, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Linkup"
  author: "OOMOL"
  version: "1.0.0"
  service: "linkup"
  categories: "AI, Data & Analytics"
  homepage: "https://www.linkup.so"
  icon: "https://static.oomol.com/logo/third-party/Linkup.svg"
---

# Linkup

Operate **Linkup** through your OOMOL-connected account. This skill calls the `linkup` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Linkup. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "linkup" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "linkup" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`fetch_webpage`](actions/fetch_webpage.md) — Fetch one webpage with Linkup and return markdown plus optional raw HTML and images.
- [`get_credits_balance`](actions/get_credits_balance.md) — Get the current Linkup credits balance for the connected API key.
- [`search_answer`](actions/search_answer.md) — Search the web with Linkup and return a sourced natural-language answer.
- [`search_results`](actions/search_results.md) — Search the web with Linkup and return raw grounded search results.
- [`search_structured_data`](actions/search_structured_data.md) — Search the web with Linkup and return data normalized to the provided JSON schema.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Linkup state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Linkup is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=linkup
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Linkup homepage: https://www.linkup.so
