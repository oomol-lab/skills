---
name: heyzine
description: "Heyzine (heyzine.com). Use this skill for ANY Heyzine request — reading, creating, updating, and deleting data. Whenever a task involves Heyzine, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Heyzine"
  author: "OOMOL"
  version: "1.0.0"
  service: "heyzine"
  categories: "Design & Media, Productivity"
  homepage: "https://heyzine.com"
  icon: "https://static.oomol.com/logo/third-party/heyzine.svg"
---

# Heyzine

Operate **Heyzine** through your OOMOL-connected account. This skill calls the `heyzine` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Productivity. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Heyzine. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "heyzine" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "heyzine" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_flipbook_to_bookshelf`](actions/add_flipbook_to_bookshelf.md) — Add a flipbook to a specific Heyzine bookshelf.
- [`delete_flipbook`](actions/delete_flipbook.md) — Delete a specific Heyzine flipbook.
- [`get_flipbook`](actions/get_flipbook.md) — Get the details and oEmbed metadata for a specific Heyzine flipbook.
- [`list_bookshelf_flipbooks`](actions/list_bookshelf_flipbooks.md) — List the flipbooks assigned to a specific Heyzine bookshelf.
- [`list_bookshelves`](actions/list_bookshelves.md) — List the bookshelves accessible with the current Heyzine API key.
- [`list_flipbooks`](actions/list_flipbooks.md) — List the flipbooks accessible with the current Heyzine API key.
- [`remove_flipbook_from_bookshelf`](actions/remove_flipbook_from_bookshelf.md) — Remove a flipbook from a specific Heyzine bookshelf.
- [`set_bookshelf_social_data`](actions/set_bookshelf_social_data.md) — Set the social sharing metadata for a specific Heyzine bookshelf.
- [`set_flipbook_social_data`](actions/set_flipbook_social_data.md) — Set the social sharing metadata for a specific Heyzine flipbook.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Heyzine state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Heyzine is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=heyzine
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Heyzine homepage: https://heyzine.com
