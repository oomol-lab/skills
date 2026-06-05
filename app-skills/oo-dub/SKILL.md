---
name: oo-dub
description: "Dub (dub.co). Use this skill for ANY Dub request — reading, creating, updating, and deleting data. Whenever a task involves Dub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Dub"
  author: "OOMOL"
  version: "1.0.0"
  service: "dub"
  categories: "Marketing, Developer Tools"
  homepage: "https://dub.co"
---

# Dub

Operate **Dub** through your OOMOL-connected account. This skill calls the `dub` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Developer Tools. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Dub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "dub" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "dub" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`count_links`](actions/count_links.md) — Retrieve the number of matching links in the authenticated Dub workspace.
- [`create_folder`](actions/create_folder.md) — Create a folder in the authenticated Dub workspace.
- [`create_link`](actions/create_link.md) — Create a short link in the authenticated Dub workspace.
- [`create_tag`](actions/create_tag.md) — Create a tag in the authenticated Dub workspace.
- [`delete_folder`](actions/delete_folder.md) — Delete a folder from the authenticated Dub workspace.
- [`delete_link`](actions/delete_link.md) — Delete a short link from the authenticated Dub workspace.
- [`delete_tag`](actions/delete_tag.md) — Delete a tag from the authenticated Dub workspace.
- [`list_folders`](actions/list_folders.md) — List folders in the authenticated Dub workspace.
- [`list_links`](actions/list_links.md) — List short links in the authenticated Dub workspace.
- [`list_tags`](actions/list_tags.md) — List tags in the authenticated Dub workspace.
- [`retrieve_analytics`](actions/retrieve_analytics.md) — Retrieve analytics for a Dub link, domain, or workspace.
- [`retrieve_link`](actions/retrieve_link.md) — Retrieve a Dub short link by ID or by supported lookup fields.
- [`update_folder`](actions/update_folder.md) — Update a folder in the authenticated Dub workspace.
- [`update_link`](actions/update_link.md) — Update a short link in the authenticated Dub workspace.
- [`update_tag`](actions/update_tag.md) — Update a tag in the authenticated Dub workspace.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Dub state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Dub is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=dub
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Dub homepage: https://dub.co
