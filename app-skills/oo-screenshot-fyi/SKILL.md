---
name: oo-screenshot-fyi
description: "screenshot.fyi (screenshot.fyi). Use this skill for ANY screenshot.fyi request — searching and reading data. Whenever a task involves screenshot.fyi, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "screenshot.fyi"
  author: "OOMOL"
  version: "1.0.0"
  service: "screenshot_fyi"
  categories: "Developer Tools, Design & Media"
  homepage: "https://www.screenshot.fyi"
  icon: "https://static.oomol.com/logo/third-party/Screenshot.fyi.svg"
---

# screenshot.fyi

Operate **screenshot.fyi** through your OOMOL-connected account. This skill calls the `screenshot_fyi` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Design & Media. Exposes 1 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected screenshot.fyi. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "screenshot_fyi" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "screenshot_fyi" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`take_screenshot`](actions/take_screenshot.md) — Capture a website screenshot with screenshot.fyi and return the generated URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change screenshot.fyi state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — screenshot.fyi is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=screenshot_fyi
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- screenshot.fyi homepage: https://www.screenshot.fyi
