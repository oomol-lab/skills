---
name: oo-crowdin
description: "Crowdin (crowdin.com). Use this skill for ANY Crowdin request — reading, creating, and updating data. Whenever a task involves Crowdin, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Crowdin"
  author: "OOMOL"
  version: "1.0.0"
  service: "crowdin"
  categories: "Productivity, Communication"
  homepage: "https://crowdin.com"
  icon: "https://static.oomol.com/logo/third-party/Crowdin.svg"
---

# Crowdin

Operate **Crowdin** through your OOMOL-connected account. This skill calls the `crowdin` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Crowdin. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "crowdin" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "crowdin" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_branch`](actions/create_branch.md) — Create a Crowdin project branch.
- [`create_directory`](actions/create_directory.md) — Create a Crowdin directory.
- [`list_branches`](actions/list_branches.md) — List Crowdin project branches.
- [`list_directories`](actions/list_directories.md) — List Crowdin directories.
- [`list_files`](actions/list_files.md) — List Crowdin source files.
- [`list_projects`](actions/list_projects.md) — List Crowdin projects.
- [`upload_file`](actions/upload_file.md) — Upload a source file to Crowdin.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Crowdin state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Crowdin is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=crowdin
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Crowdin homepage: https://crowdin.com
