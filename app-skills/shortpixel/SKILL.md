---
name: shortpixel
description: "ShortPixel (shortpixel.com). Use this skill for ANY ShortPixel request — reading, creating, updating, and deleting data. Whenever a task involves ShortPixel, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ShortPixel"
  author: "OOMOL"
  version: "1.0.0"
  service: "shortpixel"
  categories: "Design & Media, Developer Tools"
  homepage: "https://shortpixel.com"
  icon: "https://static.oomol.com/logo/third-party/shortpixel.png"
---

# ShortPixel

Operate **ShortPixel** through your OOMOL-connected account. This skill calls the `shortpixel` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Developer Tools. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ShortPixel. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shortpixel" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shortpixel" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_domain`](actions/add_domain.md) — Add and associate a domain with the current ShortPixel account.
- [`get_domain_cdn_usage`](actions/get_domain_cdn_usage.md) — Read CDN usage and quota details for one ShortPixel-associated domain.
- [`purge_domain_cache`](actions/purge_domain_cache.md) — Purge the ShortPixel CDN cache for one associated domain.
- [`purge_domain_storage`](actions/purge_domain_storage.md) — Purge ShortPixel stored optimized variants for one associated domain.
- [`revoke_domain`](actions/revoke_domain.md) — Remove the current ShortPixel account association from a domain.
- [`set_domain`](actions/set_domain.md) — Associate an existing domain with the current ShortPixel account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ShortPixel state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ShortPixel is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shortpixel
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ShortPixel homepage: https://shortpixel.com
