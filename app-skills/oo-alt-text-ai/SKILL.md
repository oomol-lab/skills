---
name: oo-alt-text-ai
description: "AltText.ai (alttext.ai). Use this skill for ANY AltText.ai request — reading, creating, updating, and deleting data. Whenever a task involves AltText.ai, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AltText.ai"
  author: "OOMOL"
  version: "1.0.0"
  service: "alt_text_ai"
  categories: "AI, Design & Media"
  homepage: "https://alttext.ai"
---

# AltText.ai

Operate **AltText.ai** through your OOMOL-connected account. This skill calls the `alt_text_ai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AltText.ai. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "alt_text_ai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "alt_text_ai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_image`](actions/create_image.md) — Add a publicly accessible image URL to AltText.ai and generate alt text.
- [`delete_image`](actions/delete_image.md) — Delete an image from the AltText.ai library by asset ID.
- [`get_account`](actions/get_account.md) — Retrieve AltText.ai account settings and usage details for the API key.
- [`get_image`](actions/get_image.md) — Retrieve a single AltText.ai image record by asset ID.
- [`list_images`](actions/list_images.md) — List image records in the AltText.ai library with optional URL filtering.
- [`scrape_page`](actions/scrape_page.md) — Scrape a web page or raw HTML document and queue discovered images for alt text generation.
- [`search_images`](actions/search_images.md) — Search the AltText.ai image library by URL, asset ID, or alt text content.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AltText.ai state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AltText.ai is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=alt_text_ai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AltText.ai homepage: https://alttext.ai
