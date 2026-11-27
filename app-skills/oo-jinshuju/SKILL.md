---
name: oo-jinshuju
description: "Jinshuju (jinshuju.net). Use this skill for ANY Jinshuju request — reading, creating, updating, and deleting data. Whenever a task involves Jinshuju, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Jinshuju"
  author: "OOMOL"
  version: "1.0.0"
  services: ["jinshuju"]
  icon: "https://static.oomol.com/logo/third-party/jinshuju.svg"
---

# Jinshuju

Operate **Jinshuju** through your OOMOL-connected account. This skill calls the `jinshuju` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Jinshuju. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "jinshuju" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "jinshuju" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `batch_create_entries` — Create up to 200 Jinshuju entries. A partial success returns created_count and per-row errors; all rows failing produces an error with those details. Batch creation does not run single-create callbacks. [write]
- `copy_form` — Copy a Jinshuju form, optionally choosing its name, folder and notification rules. [write]
- `create_entry` — Submit one Jinshuju entry. Field validation and display rules apply; inspect ignored_fields for values not saved. [write]
- `create_folder` — Create a Jinshuju folder for forms or tables. [write]
- `delete_entry` — Delete one Jinshuju form entry by serial number. [destructive]
- `get_current_user` — Read the user behind the token; an enterprise token returns the account owner.
- `get_entry` — Read one Jinshuju entry by its form token and serial number.
- `get_form` — Read a Jinshuju form's structure and field API codes before querying or writing entries.
- `list_entries` — Query Jinshuju form entries with field selection, filters, sorting and pagination. Preserve the query when continuing with next.
- `list_folders` — List manageable Jinshuju folders; an enterprise token returns the account owner's folders.
- `list_forms` — Find Jinshuju forms by name, filters and sorting, with pagination. Personal tokens see owned and shared forms; enterprise tokens see the account's forms.
- `move_form_to_folder` — Move a Jinshuju form into a folder, or pass null to remove it from its folder for all collaborators. Supply original_folder_token on retries to avoid moving it out of a later folder. [write]
- `replace_entry` — Replace an entry using PUT. Writable fields omitted from entry are cleared. Use update_entry for a partial update. [write]
- `update_entry` — Partially update an entry using PATCH. Omitted fields keep their values. An attachment field replaces the whole set; include existing URLs or IDs to retain those files. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Jinshuju state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Jinshuju is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/jinshuju
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- Jinshuju homepage: https://jinshuju.net
- API documentation: https://open.jinshuju.net/
