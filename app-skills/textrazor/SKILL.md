---
name: textrazor
description: "TextRazor (textrazor.com). Use this skill for ANY TextRazor request — searching and reading data. Whenever a task involves TextRazor, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "TextRazor"
  author: "OOMOL"
  version: "1.0.0"
  service: "textrazor"
  categories: "AI, Data & Analytics"
  homepage: "https://www.textrazor.com"
  icon: "https://static.oomol.com/logo/third-party/TextRazor.svg"
---

# TextRazor

Operate **TextRazor** through your OOMOL-connected account. This skill calls the `textrazor` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected TextRazor. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "textrazor" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "textrazor" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`account_info`](actions/account_info.md) — Retrieve the current TextRazor account plan and request quota summary.
- [`analyze_content`](actions/analyze_content.md) — Analyze text with one or more TextRazor extractors and return the official analysis payload.
- [`classify_text`](actions/classify_text.md) — Classify text with one or more TextRazor classifiers and return the official categories payload.
- [`custom_classifier_manager`](actions/custom_classifier_manager.md) — Manage TextRazor custom classifier categories, including upload, listing, retrieval, and deletion.
- [`dictionary_manager`](actions/dictionary_manager.md) — Manage TextRazor custom entity dictionaries, including lifecycle and entry operations.
- [`extract_entities`](actions/extract_entities.md) — Extract named entities from text using the official TextRazor entities extractor.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change TextRazor state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — TextRazor is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=textrazor
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- TextRazor homepage: https://www.textrazor.com
