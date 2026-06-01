---
name: logo-dev
description: "Logo.dev (logo.dev). Use this skill for ANY Logo.dev request — searching and reading data. Whenever a task involves Logo.dev, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Logo.dev"
  author: "OOMOL"
  version: "1.0.0"
  service: "logo_dev"
  categories: "Design & Media, Developer Tools"
  homepage: "https://logo.dev"
  icon: "https://static.oomol.com/logo/third-party/Logo.dev.svg"
---

# Logo.dev

Operate **Logo.dev** through your OOMOL-connected account. This skill calls the `logo_dev` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Developer Tools. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Logo.dev. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "logo_dev" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "logo_dev" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`describe_brand`](actions/describe_brand.md) — Fetch structured Logo.dev brand metadata for a domain.
- [`get_logo_by_crypto`](actions/get_logo_by_crypto.md) — Build a Logo.dev image URL for a crypto symbol.
- [`get_logo_by_domain`](actions/get_logo_by_domain.md) — Build a Logo.dev image URL for a company domain.
- [`get_logo_by_isin`](actions/get_logo_by_isin.md) — Build a Logo.dev image URL for an ISIN identifier.
- [`get_logo_by_name`](actions/get_logo_by_name.md) — Build a Logo.dev image URL for a brand name.
- [`get_logo_by_ticker`](actions/get_logo_by_ticker.md) — Build a Logo.dev image URL for a stock ticker.
- [`search_brands`](actions/search_brands.md) — Search Logo.dev brands by query text and return candidate brands.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Logo.dev state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Logo.dev is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=logo_dev
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Logo.dev homepage: https://logo.dev
