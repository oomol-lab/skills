---
name: oo-eventee
description: "Eventee (eventee.co). Use this skill for ANY Eventee request — searching and reading data. Whenever a task involves Eventee, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Eventee"
  author: "OOMOL"
  version: "1.0.0"
  service: "eventee"
  categories: "Productivity, Communication"
  homepage: "https://eventee.co"
  icon: "https://static.oomol.com/logo/third-party/eventee.png"
---

# Eventee

Operate **Eventee** through your OOMOL-connected account. This skill calls the `eventee` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Eventee. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "eventee" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "eventee" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_event_content`](actions/get_event_content.md) — Retrieve the event content export, including halls, sessions, pauses, speakers, and tracks.
- [`list_groups`](actions/list_groups.md) — List all attendee groups configured for the current Eventee event.
- [`list_participants`](actions/list_participants.md) — List all participants currently registered in the current Eventee event.
- [`list_registrations`](actions/list_registrations.md) — List all pending or completed registrations for the current Eventee event.
- [`list_reviews`](actions/list_reviews.md) — List all session reviews submitted by attendees for the current Eventee event.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Eventee state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Eventee is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=eventee
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Eventee homepage: https://eventee.co
