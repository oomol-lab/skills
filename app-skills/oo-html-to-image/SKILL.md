---
name: oo-html-to-image
description: "HTML to Image (html2img.com). Use this skill for ANY HTML to Image request — searching and reading data. Whenever a task involves HTML to Image, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "HTML to Image"
  author: "OOMOL"
  version: "1.0.0"
  service: "html_to_image"
  categories: "Developer Tools, Design & Media"
  homepage: "https://html2img.com"
  icon: "https://static.oomol.com/logo/third-party/html_to_image.svg"
---

# HTML to Image

Operate **HTML to Image** through your OOMOL-connected account. This skill calls the `html_to_image` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Design & Media. Exposes 2 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected HTML to Image. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "html_to_image" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "html_to_image" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`capture_website_screenshot`](actions/capture_website_screenshot.md) — Capture a public webpage with HTML to Image and return the generated screenshot URL.
- [`convert_html_to_image`](actions/convert_html_to_image.md) — Convert raw HTML and optional CSS to an image with HTML to Image and return the generated image URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change HTML to Image state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — HTML to Image is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=html_to_image
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- HTML to Image homepage: https://html2img.com
