---
name: oo-better-proposals
description: "Better Proposals (betterproposals.io). Use this skill for ANY Better Proposals request — reading, creating, and updating data. Whenever a task involves Better Proposals, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Better Proposals"
  author: "OOMOL"
  version: "1.0.0"
  service: "better_proposals"
  categories: "Productivity, Communication"
  homepage: "https://betterproposals.io"
  icon: "https://static.oomol.com/logo/third-party/better_proposals.svg"
---

# Better Proposals

Operate **Better Proposals** through your OOMOL-connected account. This skill calls the `better_proposals` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 20 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Better Proposals. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "better_proposals" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "better_proposals" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_brand_settings`](actions/get_brand_settings.md) — Get default Better Proposals brand settings such as brand name and tax defaults.
- [`get_company`](actions/get_company.md) — Get details for a single Better Proposals company by ID.
- [`get_currency`](actions/get_currency.md) — Get details for a single Better Proposals currency by ID.
- [`get_proposal`](actions/get_proposal.md) — Get details for a single Better Proposals proposal by ID.
- [`get_proposal_count`](actions/get_proposal_count.md) — Get the total Better Proposals proposal count for the connected account.
- [`get_quote`](actions/get_quote.md) — Get details for a single Better Proposals quote by ID.
- [`get_settings`](actions/get_settings.md) — Get current Better Proposals account settings such as tax and timezone defaults.
- [`get_template`](actions/get_template.md) — Get details for a single Better Proposals template by ID.
- [`list_companies`](actions/list_companies.md) — List Better Proposals companies with optional pagination.
- [`list_currencies`](actions/list_currencies.md) — List Better Proposals currencies with optional pagination.
- [`list_document_types`](actions/list_document_types.md) — List Better Proposals document types with optional pagination.
- [`list_merge_tags`](actions/list_merge_tags.md) — List Better Proposals custom merge tags with optional pagination.
- [`list_new_proposals`](actions/list_new_proposals.md) — List Better Proposals proposals that are currently in the new proposal lifecycle state.
- [`list_opened_proposals`](actions/list_opened_proposals.md) — List Better Proposals proposals that have been opened by recipients.
- [`list_paid_proposals`](actions/list_paid_proposals.md) — List Better Proposals proposals that have been paid.
- [`list_proposals`](actions/list_proposals.md) — List Better Proposals proposals with optional pagination and document type filtering.
- [`list_quotes`](actions/list_quotes.md) — List Better Proposals quotes with optional pagination.
- [`list_sent_proposals`](actions/list_sent_proposals.md) — List Better Proposals proposals that have been sent to recipients.
- [`list_signed_proposals`](actions/list_signed_proposals.md) — List Better Proposals proposals that have been signed by recipients.
- [`list_templates`](actions/list_templates.md) — List Better Proposals templates with optional pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Better Proposals state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Better Proposals is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=better_proposals
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Better Proposals homepage: https://betterproposals.io
