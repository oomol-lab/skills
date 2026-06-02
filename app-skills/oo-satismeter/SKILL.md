---
name: oo-satismeter
description: "SatisMeter (satismeter.com). Use this skill for ANY SatisMeter request — searching and reading data. Whenever a task involves SatisMeter, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SatisMeter"
  author: "OOMOL"
  version: "1.0.0"
  service: "satismeter"
  categories: "Marketing, Data & Analytics"
  homepage: "https://satismeter.com"
  icon: "https://static.oomol.com/logo/third-party/Satismeter.svg"
---

# SatisMeter

Operate **SatisMeter** through your OOMOL-connected account. This skill calls the `satismeter` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SatisMeter. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "satismeter" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "satismeter" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_project`](actions/get_project.md) — Retrieve a SatisMeter project by ID.
- [`get_survey`](actions/get_survey.md) — Retrieve a SatisMeter survey by ID.
- [`get_survey_statistics`](actions/get_survey_statistics.md) — Retrieve aggregated statistics for one SatisMeter survey.
- [`list_project_responses`](actions/list_project_responses.md) — List responses recorded across all surveys in a SatisMeter project.
- [`list_survey_responses`](actions/list_survey_responses.md) — List responses recorded for one SatisMeter survey.
- [`list_surveys`](actions/list_surveys.md) — List surveys configured in a SatisMeter project.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SatisMeter state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SatisMeter is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=satismeter
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SatisMeter homepage: https://satismeter.com
