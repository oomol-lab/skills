---
name: placid
description: "Placid (placid.app). Use this skill for ANY Placid request — reading, creating, updating, and deleting data. Whenever a task involves Placid, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Placid"
  author: "OOMOL"
  version: "1.0.0"
  service: "placid"
  categories: "Design & Media, Developer Tools"
  homepage: "https://placid.app"
  icon: "https://static.oomol.com/logo/third-party/placid.png"
---

# Placid

Operate **Placid** through your OOMOL-connected account. This skill calls the `placid` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Developer Tools. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Placid. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "placid" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "placid" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_image`](actions/create_image.md) — Queue one Placid image generation request from a template UUID and dynamic layer payload, then return the image handle for polling.
- [`delete_image`](actions/delete_image.md) — Delete one Placid image request by identifier and return whether the delete succeeded.
- [`get_image`](actions/get_image.md) — Get the current Placid image generation status for one image identifier and return the finished image URL when available.
- [`get_template`](actions/get_template.md) — Get one Placid template by UUID and return its dynamic layer metadata for downstream image generation.
- [`list_templates`](actions/list_templates.md) — List Placid templates for the connected project with optional collection, title, tag, ordering, or next-page URL filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Placid state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Placid is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=placid
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Placid homepage: https://placid.app
