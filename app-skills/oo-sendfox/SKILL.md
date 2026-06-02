---
name: oo-sendfox
description: "SendFox (sendfox.com). Use this skill for ANY SendFox request — reading, creating, updating, and deleting data. Whenever a task involves SendFox, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SendFox"
  author: "OOMOL"
  version: "1.0.0"
  service: "sendfox"
  categories: "Communication, Marketing"
  homepage: "https://sendfox.com"
  icon: "https://static.oomol.com/logo/third-party/sendfox.svg"
---

# SendFox

Operate **SendFox** through your OOMOL-connected account. This skill calls the `sendfox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SendFox. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sendfox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sendfox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_contact_to_list`](actions/add_contact_to_list.md) — Add an existing SendFox contact to a contact list.
- [`create_contact`](actions/create_contact.md) — Create a SendFox contact and optionally attach it to lists with custom contact fields.
- [`create_contact_list`](actions/create_contact_list.md) — Create a SendFox contact list.
- [`delete_contact`](actions/delete_contact.md) — Soft-delete a SendFox contact and cancel any scheduled deliverables.
- [`delete_contact_list`](actions/delete_contact_list.md) — Soft-delete a SendFox contact list when it is not used by dependent resources.
- [`get_contact`](actions/get_contact.md) — Get a SendFox contact by ID.
- [`get_contact_list`](actions/get_contact_list.md) — Get a SendFox contact list by ID.
- [`list_contact_lists`](actions/list_contact_lists.md) — List SendFox contact lists with optional search filtering.
- [`list_contacts`](actions/list_contacts.md) — List SendFox contacts with optional search, email, and unsubscribe filters.
- [`list_contacts_in_list`](actions/list_contacts_in_list.md) — List contacts in a SendFox contact list with optional search filtering.
- [`remove_contact_from_list`](actions/remove_contact_from_list.md) — Remove a SendFox contact from a contact list.
- [`unsubscribe_contact`](actions/unsubscribe_contact.md) — Unsubscribe a SendFox contact by email address.
- [`update_contact`](actions/update_contact.md) — Update a SendFox contact's name, list memberships, or custom field values.
- [`update_contact_list`](actions/update_contact_list.md) — Update a SendFox contact list name.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SendFox state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SendFox is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=sendfox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SendFox homepage: https://sendfox.com
