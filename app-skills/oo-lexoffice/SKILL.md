---
name: oo-lexoffice
description: "lexoffice (office.lexware.de). Use this skill for ANY lexoffice request — reading, creating, and updating data. Whenever a task involves lexoffice, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "lexoffice"
  author: "OOMOL"
  version: "1.0.0"
  service: "lexoffice"
  categories: "Finance, Productivity"
  homepage: "https://office.lexware.de/"
  icon: "https://static.oomol.com/logo/third-party/lexoffice.svg"
---

# lexoffice

Operate **lexoffice** through your OOMOL-connected account. This skill calls the `lexoffice` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Productivity. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected lexoffice. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "lexoffice" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "lexoffice" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_article`](actions/create_article.md) — Create one Lexoffice article with a NET or GROSS leading price payload.
- [`create_contact`](actions/create_contact.md) — Create one Lexoffice contact using either a company or person payload.
- [`get_article`](actions/get_article.md) — Retrieve one Lexoffice article by ID.
- [`get_contact`](actions/get_contact.md) — Retrieve one Lexoffice contact by ID.
- [`get_profile`](actions/get_profile.md) — Retrieve the current Lexoffice connection profile and organization metadata.
- [`list_articles`](actions/list_articles.md) — List Lexoffice articles with optional articleNumber, GTIN, or type filters.
- [`list_contacts`](actions/list_contacts.md) — List Lexoffice contacts with optional filters and page navigation.
- [`list_voucherlist`](actions/list_voucherlist.md) — List Lexoffice voucher metadata using the official voucherlist filters and paging.
- [`update_article`](actions/update_article.md) — Update one Lexoffice article by ID using the latest optimistic-locking version.
- [`update_contact`](actions/update_contact.md) — Update one Lexoffice contact by ID using the latest optimistic-locking version.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change lexoffice state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — lexoffice is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=lexoffice
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- lexoffice homepage: https://office.lexware.de/
