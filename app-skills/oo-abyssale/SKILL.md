---
name: oo-abyssale
description: "Abyssale (abyssale.com). Use this skill for ANY Abyssale request — reading, creating, and updating data. Whenever a task involves Abyssale, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Abyssale"
  author: "OOMOL"
  version: "1.0.0"
  service: "abyssale"
  categories: "Design & Media, Marketing"
  homepage: "https://www.abyssale.com/"
---

# Abyssale

Operate **Abyssale** through your OOMOL-connected account. This skill calls the `abyssale` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Marketing. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Abyssale. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "abyssale" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "abyssale" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_dynamic_image_url`](actions/create_dynamic_image_url.md) — Create or retrieve the dynamic image URL for an Abyssale design.
- [`create_project`](actions/create_project.md) — Create an Abyssale project to organize templates and generated images.
- [`generate_banner`](actions/generate_banner.md) — Generate one Abyssale image from a design using JSON element overrides and return the generated file metadata.
- [`get_banner`](actions/get_banner.md) — Retrieve metadata for an Abyssale generated file.
- [`get_design`](actions/get_design.md) — Retrieve Abyssale design details including formats, elements, and variables.
- [`get_design_format`](actions/get_design_format.md) — Retrieve detailed information for one Abyssale design format.
- [`list_designs`](actions/list_designs.md) — List Abyssale designs available to the API key.
- [`list_fonts`](actions/list_fonts.md) — List custom and Google fonts available in Abyssale.
- [`list_projects`](actions/list_projects.md) — List Abyssale projects available to the API key.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Abyssale state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Abyssale is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=abyssale
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Abyssale homepage: https://www.abyssale.com/
