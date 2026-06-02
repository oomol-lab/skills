---
name: oo-htmlcsstoimage
description: "HTML/CSS to Image (htmlcsstoimage.com). Use this skill for ANY HTML/CSS to Image request — reading, creating, updating, and deleting data. Whenever a task involves HTML/CSS to Image, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "HTML/CSS to Image"
  author: "OOMOL"
  version: "1.0.0"
  service: "htmlcsstoimage"
  categories: "Developer Tools, Design & Media"
  homepage: "https://htmlcsstoimage.com"
  icon: "https://static.oomol.com/logo/third-party/htmlcsstoimage.svg"
---

# HTML/CSS to Image

Operate **HTML/CSS to Image** through your OOMOL-connected account. This skill calls the `htmlcsstoimage` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Design & Media. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected HTML/CSS to Image. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "htmlcsstoimage" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "htmlcsstoimage" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_batch_images`](actions/create_batch_images.md) — Create up to 25 HTML/CSS to Image images in one batch using shared default options and per-image variations.
- [`create_image`](actions/create_image.md) — Create an image from either raw HTML/CSS or a public webpage URL with HTML/CSS to Image.
- [`delete_batch_images`](actions/delete_batch_images.md) — Delete multiple generated images from HTML/CSS to Image in one request.
- [`delete_image`](actions/delete_image.md) — Delete one generated image from HTML/CSS to Image and clear its CDN cache.
- [`get_usage`](actions/get_usage.md) — Retrieve HTML/CSS to Image usage counts by hour, day, month, and billing period.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change HTML/CSS to Image state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — HTML/CSS to Image is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=htmlcsstoimage
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- HTML/CSS to Image homepage: https://htmlcsstoimage.com
