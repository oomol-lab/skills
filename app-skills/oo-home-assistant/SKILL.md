---
name: oo-home-assistant
description: "Home Assistant (home-assistant.io). Use this skill for ANY Home Assistant request — searching and reading data. Whenever a task involves Home Assistant, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Home Assistant"
  author: "OOMOL"
  version: "1.0.0"
  service: "home_assistant"
  categories: "Productivity"
  homepage: "https://www.home-assistant.io"
---

# Home Assistant

Operate **Home Assistant** through your OOMOL-connected account. This skill calls the `home_assistant` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Home Assistant. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "home_assistant" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "home_assistant" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`call_service`](actions/call_service.md) — Call a Home Assistant service to control entities, such as light.turn_on or switch.turn_off.
- [`fire_event`](actions/fire_event.md) — Fire one Home Assistant event with optional event data.
- [`get_config`](actions/get_config.md) — Fetch the Home Assistant instance configuration.
- [`get_state`](actions/get_state.md) — Fetch the current state for one Home Assistant entity.
- [`list_events`](actions/list_events.md) — List Home Assistant event types currently known by the instance.
- [`list_services`](actions/list_services.md) — List Home Assistant service domains and their available services.
- [`list_states`](actions/list_states.md) — List all current Home Assistant entity states.
- [`render_template`](actions/render_template.md) — Render a Home Assistant template against the connected instance.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Home Assistant state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Home Assistant is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=home_assistant
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Home Assistant homepage: https://www.home-assistant.io
