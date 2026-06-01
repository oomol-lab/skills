---
name: dailybot
description: "Dailybot (dailybot.com). Use this skill for ANY Dailybot request — reading, creating, and updating data. Whenever a task involves Dailybot, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Dailybot"
  author: "OOMOL"
  version: "1.0.0"
  service: "dailybot"
  categories: "Communication, Productivity"
  homepage: "https://www.dailybot.com"
  icon: "https://static.oomol.com/logo/third-party/dailybot.svg"
---

# Dailybot

Operate **Dailybot** through your OOMOL-connected account. This skill calls the `dailybot` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Dailybot. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "dailybot" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "dailybot" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_me`](actions/get_me.md) — Get the authenticated Dailybot user context and linked organization.
- [`get_organization`](actions/get_organization.md) — Get the Dailybot organization details for the authenticated API key.
- [`get_team`](actions/get_team.md) — Get a specific team from the authenticated Dailybot organization.
- [`get_user`](actions/get_user.md) — Get a specific user from the authenticated Dailybot organization.
- [`list_team_members`](actions/list_team_members.md) — List members of a specific Dailybot team.
- [`list_teams`](actions/list_teams.md) — List teams in the authenticated Dailybot organization.
- [`list_users`](actions/list_users.md) — List users in the authenticated Dailybot organization.
- [`open_conversation`](actions/open_conversation.md) — Open a direct Dailybot conversation with a user.
- [`send_email`](actions/send_email.md) — Send an email notification through Dailybot.
- [`send_message`](actions/send_message.md) — Send a chat message to a Dailybot user, team, or channel.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Dailybot state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Dailybot is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=dailybot
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Dailybot homepage: https://www.dailybot.com
