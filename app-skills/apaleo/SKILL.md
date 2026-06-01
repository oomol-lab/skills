---
name: apaleo
description: "apaleo (apaleo.com). Use this skill for ANY apaleo request — reading, creating, updating, and deleting data. Whenever a task involves apaleo, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "apaleo"
  author: "OOMOL"
  version: "1.0.0"
  service: "apaleo"
  categories: "Productivity, Finance"
  homepage: "https://apaleo.com"
  icon: "https://static.oomol.com/logo/third-party/Apaleo.svg"
---

# apaleo

Operate **apaleo** through your OOMOL-connected account. This skill calls the `apaleo` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Finance. Exposes 29 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected apaleo. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "apaleo" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "apaleo" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`archive_property`](actions/archive_property.md) — Archive a live property by ID.
- [`check_property_exists`](actions/check_property_exists.md) — Check whether a property exists by ID.
- [`check_unit_attribute_exists`](actions/check_unit_attribute_exists.md) — Check whether a unit attribute definition exists by ID.
- [`check_unit_exists`](actions/check_unit_exists.md) — Check whether a unit exists by ID.
- [`check_unit_group_exists`](actions/check_unit_group_exists.md) — Check whether a unit group exists by ID.
- [`clone_property`](actions/clone_property.md) — Clone an existing property into a new property with inventory and rate plans.
- [`count_properties`](actions/count_properties.md) — Return the total number of properties accessible to the connected apaleo account.
- [`count_unit_groups`](actions/count_unit_groups.md) — Return the total number of unit groups matching the provided filters.
- [`count_units`](actions/count_units.md) — Return the total number of units matching the provided filters.
- [`create_multiple_units`](actions/create_multiple_units.md) — Create multiple units in a single bulk request.
- [`create_property`](actions/create_property.md) — Create a new property in apaleo.
- [`create_unit`](actions/create_unit.md) — Create a new unit.
- [`create_unit_attribute`](actions/create_unit_attribute.md) — Create a new unit attribute definition.
- [`create_unit_group`](actions/create_unit_group.md) — Create a new unit group.
- [`delete_unit`](actions/delete_unit.md) — Delete a unit by ID.
- [`delete_unit_attribute`](actions/delete_unit_attribute.md) — Delete a unit attribute definition by ID.
- [`delete_unit_group`](actions/delete_unit_group.md) — Delete a unit group by ID.
- [`get_property`](actions/get_property.md) — Get one property by ID, including optional localized fields and expanded actions.
- [`get_unit`](actions/get_unit.md) — Get one unit by ID, including optional localized fields and expansions.
- [`get_unit_attribute`](actions/get_unit_attribute.md) — Get one unit attribute definition by ID.
- [`get_unit_group`](actions/get_unit_group.md) — Get one unit group by ID, including optional localized fields and expansions.
- [`list_properties`](actions/list_properties.md) — List properties accessible to the connected apaleo account, with optional status, archive, country, and expansion filters.
- [`list_supported_countries`](actions/list_supported_countries.md) — List ISO country codes supported by apaleo property creation.
- [`list_unit_attributes`](actions/list_unit_attributes.md) — List unit attribute definitions for the current account.
- [`list_unit_groups`](actions/list_unit_groups.md) — List unit groups with filters for property, unit group type, pagination, and embedded resources.
- [`list_units`](actions/list_units.md) — List units with filters for property, unit group, attributes, occupancy, maintenance state, archive state, and expansions.
- [`move_property_to_live`](actions/move_property_to_live.md) — Move a test property to live status.
- [`replace_unit_group`](actions/replace_unit_group.md) — Completely replace the mutable fields of an existing unit group.
- [`reset_property_data`](actions/reset_property_data.md) — Delete all transactional data for a test property.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change apaleo state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — apaleo is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=apaleo
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- apaleo homepage: https://apaleo.com
