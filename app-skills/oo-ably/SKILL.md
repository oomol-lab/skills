---
name: oo-ably
description: "Ably (ably.com). Use this skill for ANY Ably request — reading, creating, updating, and deleting data. Whenever a task involves Ably, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ably"
  author: "OOMOL"
  version: "1.0.0"
  service: "ably"
  categories: "Developer Tools"
  homepage: "https://ably.com"
  icon: "https://static.oomol.com/logo/third-party/ably.svg"
---

# Ably

Operate **Ably** through your OOMOL-connected account. This skill calls the `ably` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Ably. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ably" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ably" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`batch_presence`](actions/batch_presence.md) — Query current presence for multiple Ably channels.
- [`batch_presence_history`](actions/batch_presence_history.md) — Query presence history for multiple Ably channels.
- [`create_channel`](actions/create_channel.md) — Activate an Ably channel by retrieving its metadata.
- [`delete_channel_subscription`](actions/delete_channel_subscription.md) — Delete an Ably push notification subscription for a channel, device, or client.
- [`get_channel_details`](actions/get_channel_details.md) — Retrieve Ably metadata and occupancy details for one channel.
- [`get_channel_history`](actions/get_channel_history.md) — Retrieve message history for one Ably channel.
- [`get_presence_history`](actions/get_presence_history.md) — Retrieve presence history for one Ably channel.
- [`get_service_time`](actions/get_service_time.md) — Retrieve Ably service time in milliseconds since the Unix epoch.
- [`get_stats`](actions/get_stats.md) — Retrieve Ably application usage statistics.
- [`list_push_channel_subscriptions`](actions/list_push_channel_subscriptions.md) — List Ably push notification channel subscriptions.
- [`publish_message_to_channel`](actions/publish_message_to_channel.md) — Publish one message to an Ably channel.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Ably state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Ably is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ably
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Ably homepage: https://ably.com
