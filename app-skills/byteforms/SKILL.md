---
name: byteforms
description: "ByteForms (forms.bytesuite.io). Use this skill for ANY ByteForms request — searching and reading data. Whenever a task involves ByteForms, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ByteForms"
  author: "OOMOL"
  version: "1.0.0"
  service: "byteforms"
  categories: "Productivity, Data & Analytics"
  homepage: "https://forms.bytesuite.io/"
  icon: "https://static.oomol.com/logo/third-party/byteforms.png"
---

# ByteForms

Operate **ByteForms** through your OOMOL-connected account. This skill calls the `byteforms` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ByteForms. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "byteforms" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "byteforms" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_form`](actions/get_form.md) — Get one ByteForms form by form ID.
- [`list_form_responses`](actions/list_form_responses.md) — List responses for one ByteForms form with the documented cursor, query, order, and limit parameters.
- [`list_forms`](actions/list_forms.md) — List forms available to the authenticated ByteForms account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ByteForms state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ByteForms is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=byteforms
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ByteForms homepage: https://forms.bytesuite.io/
