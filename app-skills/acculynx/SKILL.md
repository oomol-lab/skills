---
name: acculynx
description: "AccuLynx (acculynx.com). Use this skill for ANY AccuLynx request — reading, creating, and updating data. Whenever a task involves AccuLynx, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AccuLynx"
  author: "OOMOL"
  version: "1.0.0"
  service: "acculynx"
  categories: "Productivity, Marketing"
  homepage: "https://acculynx.com"
  icon: "https://static.oomol.com/logo/third-party/acculynx.svg"
---

# AccuLynx

Operate **AccuLynx** through your OOMOL-connected account. This skill calls the `acculynx` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AccuLynx. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "acculynx" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "acculynx" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create one new contact in AccuLynx.
- [`create_job`](actions/create_job.md) — Create one new job in the AccuLynx Lead milestone.
- [`get_company_settings`](actions/get_company_settings.md) — Get the current AccuLynx company settings for the connected location.
- [`get_initial_appointment`](actions/get_initial_appointment.md) — Get the initial appointment for one AccuLynx job.
- [`list_calendar_appointments`](actions/list_calendar_appointments.md) — List appointment summaries for one AccuLynx calendar within a date range.
- [`list_calendars`](actions/list_calendars.md) — List the calendars available in the current AccuLynx location.
- [`list_contact_types`](actions/list_contact_types.md) — List the contact types configured for the current AccuLynx company.
- [`list_job_categories`](actions/list_job_categories.md) — List the active AccuLynx job categories configured for the company.
- [`list_lead_sources`](actions/list_lead_sources.md) — List the active lead sources configured for the current AccuLynx company.
- [`list_trade_types`](actions/list_trade_types.md) — List the active AccuLynx trade types configured for the company.
- [`list_work_types`](actions/list_work_types.md) — List the active AccuLynx work types configured for the company.
- [`upsert_initial_appointment`](actions/upsert_initial_appointment.md) — Add or update the initial appointment for one AccuLynx job.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AccuLynx state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AccuLynx is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=acculynx
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AccuLynx homepage: https://acculynx.com
