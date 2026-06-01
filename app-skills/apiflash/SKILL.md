---
name: apiflash
description: "ApiFlash (apiflash.com). Use this skill for ANY ApiFlash request — searching and reading data. Whenever a task involves ApiFlash, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ApiFlash"
  author: "OOMOL"
  version: "1.0.0"
  service: "apiflash"
  categories: "Developer Tools, Design & Media"
  homepage: "https://apiflash.com"
  icon: "https://static.oomol.com/logo/third-party/Apiflash.svg"
---

# ApiFlash

Operate **ApiFlash** through your OOMOL-connected account. This skill calls the `apiflash` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Design & Media. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ApiFlash. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "apiflash" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "apiflash" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`capture_website_screenshot`](actions/capture_website_screenshot.md) — Capture a website screenshot with ApiFlash and return the generated screenshot URL.
- [`get_quota_information`](actions/get_quota_information.md) — Retrieve the current ApiFlash screenshot quota and reset time.
- [`get_screenshot_metadata`](actions/get_screenshot_metadata.md) — Read HTTP metadata for a screenshot URL previously returned by ApiFlash.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ApiFlash state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ApiFlash is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=apiflash
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ApiFlash homepage: https://apiflash.com
