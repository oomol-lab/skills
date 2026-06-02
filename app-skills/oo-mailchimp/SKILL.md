---
name: oo-mailchimp
description: "Mailchimp (mailchimp.com). Use this skill for ANY Mailchimp request — reading, creating, updating, and deleting data. Whenever a task involves Mailchimp, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Mailchimp"
  author: "OOMOL"
  version: "1.0.0"
  service: "mailchimp"
  categories: "Communication, Marketing"
  homepage: "https://mailchimp.com"
  icon: "https://static.oomol.com/logo/third-party/Mailchimp.svg"
---

# Mailchimp

Operate **Mailchimp** through your OOMOL-connected account. This skill calls the `mailchimp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Mailchimp. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "mailchimp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "mailchimp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`archive_member`](actions/archive_member.md) — Archive a Mailchimp member from the specified audience/list.
- [`delete_member_permanently`](actions/delete_member_permanently.md) — Permanently delete a Mailchimp member from the specified audience/list.
- [`get_list`](actions/get_list.md) — Fetch a single Mailchimp audience/list by ID.
- [`get_member`](actions/get_member.md) — Fetch a single Mailchimp member by subscriber hash or email address.
- [`list_lists`](actions/list_lists.md) — List Mailchimp audiences/lists visible to the current API key.
- [`list_member_tags`](actions/list_member_tags.md) — List tags currently attached to a Mailchimp member.
- [`list_members`](actions/list_members.md) — List members in a Mailchimp audience/list.
- [`list_merge_fields`](actions/list_merge_fields.md) — List merge fields defined for a Mailchimp audience/list.
- [`update_member`](actions/update_member.md) — Patch an existing Mailchimp member by subscriber hash or email address.
- [`update_member_tags`](actions/update_member_tags.md) — Add or remove Mailchimp member tags using the official tag-update endpoint.
- [`upsert_member`](actions/upsert_member.md) — Add or update a Mailchimp member using the official upsert endpoint.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Mailchimp state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Mailchimp is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=mailchimp
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Mailchimp homepage: https://mailchimp.com
