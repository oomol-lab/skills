---
name: oo-bark
description: "Bark (bark.day.app). Use this skill for ANY Bark request — reading, creating, and updating data. Whenever a task involves Bark, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Bark"
  author: "OOMOL"
  version: "1.0.0"
  service: "bark"
  categories: "Communication"
  homepage: "https://bark.day.app"
  icon: "https://static.oomol.com/logo/third-party/bark.png"
---

# Bark

Operate **Bark** through your OOMOL-connected account. This skill calls the `bark` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Bark. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "bark" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "bark" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_server_info`](actions/get_server_info.md) — Fetch raw server information from the connected Bark server.
- [`send_batch_notifications`](actions/send_batch_notifications.md) — Send the same notification to multiple explicit Bark device keys through the REST push endpoint.
- [`send_encrypted_notification`](actions/send_encrypted_notification.md) — Send a pre-encrypted Bark notification ciphertext to the connected Bark device.
- [`send_notification`](actions/send_notification.md) — Send a notification to the connected Bark device through the REST push endpoint.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Bark state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Bark is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=bark
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Bark homepage: https://bark.day.app
