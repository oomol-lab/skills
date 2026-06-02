---
name: oo-slite
description: "Slite (slite.com). Use this skill for ANY Slite request — reading, creating, updating, and deleting data. Whenever a task involves Slite, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Slite"
  author: "OOMOL"
  version: "1.0.0"
  service: "slite"
  categories: "Productivity"
  homepage: "https://slite.com"
  icon: "https://static.oomol.com/logo/third-party/slite.png"
---

# Slite

Operate **Slite** through your OOMOL-connected account. This skill calls the `slite` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Slite. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "slite" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "slite" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_note`](actions/create_note.md) — Create a Slite note with markdown or HTML content and optional collection attributes.
- [`delete_note`](actions/delete_note.md) — Delete a Slite note and its children by note identifier.
- [`get_group`](actions/get_group.md) — Read one Slite group by identifier.
- [`get_note`](actions/get_note.md) — Read one Slite note and return its content in Markdown, HTML, or SliteML.
- [`list_notes`](actions/list_notes.md) — List Slite notes with optional owner, parent, ordering, and pagination filters.
- [`search_groups`](actions/search_groups.md) — Search Slite groups by name and return cursor-based pagination metadata.
- [`search_notes`](actions/search_notes.md) — Search Slite notes by query string and optional review, depth, archive, and date filters.
- [`update_note`](actions/update_note.md) — Update a Slite note title, body content, or collection attributes.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Slite state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Slite is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=slite
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Slite homepage: https://slite.com
