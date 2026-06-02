---
name: oo-gamma
description: "Gamma (gamma.app). Use this skill for ANY Gamma request — reading, creating, and updating data. Whenever a task involves Gamma, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Gamma"
  author: "OOMOL"
  version: "1.0.0"
  service: "gamma"
  categories: "AI, Design & Media, Productivity"
  homepage: "https://gamma.app"
  icon: "https://static.oomol.com/logo/third-party/Gamma.svg"
---

# Gamma

Operate **Gamma** through your OOMOL-connected account. This skill calls the `gamma` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media, Productivity. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Gamma. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gamma" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gamma" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_generation`](actions/create_generation.md) — Create an asynchronous Gamma generation from text input.
- [`create_generation_and_wait`](actions/create_generation_and_wait.md) — Create a Gamma generation from text input and keep polling until it completes, fails, or times out.
- [`create_generation_from_template`](actions/create_generation_from_template.md) — Create an asynchronous Gamma generation from an existing Gamma template.
- [`create_generation_from_template_and_wait`](actions/create_generation_from_template_and_wait.md) — Create a Gamma generation from a template and keep polling until it completes, fails, or times out.
- [`get_generation`](actions/get_generation.md) — Get the status and result URLs for a specific Gamma generation job.
- [`list_folders`](actions/list_folders.md) — List the Gamma folders available in the current workspace.
- [`list_themes`](actions/list_themes.md) — List the Gamma themes available in the current workspace.
- [`wait_for_generation`](actions/wait_for_generation.md) — Poll a Gamma generation job until it completes, fails, or the polling timeout is reached.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Gamma state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Gamma is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gamma
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Gamma homepage: https://gamma.app
