---
name: tisane
description: "Tisane (tisane.ai). Use this skill for ANY Tisane request — searching and reading data. Whenever a task involves Tisane, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Tisane"
  author: "OOMOL"
  version: "1.0.0"
  service: "tisane"
  categories: "AI, Security & Identity"
  homepage: "https://tisane.ai"
  icon: "https://static.oomol.com/logo/third-party/tisane.svg"
---

# Tisane

Operate **Tisane** through your OOMOL-connected account. This skill calls the `tisane` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Security & Identity. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Tisane. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "tisane" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "tisane" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`analyze_text`](actions/analyze_text.md) — Analyze text with Tisane for problematic content, sentiment, entities, topics, and other linguistic features.
- [`calculate_similarity`](actions/calculate_similarity.md) — Calculate the semantic similarity between two text fragments, either in one language or across languages.
- [`compare_entities`](actions/compare_entities.md) — Compare two compound person entities with Tisane and return whether they are the same or different.
- [`detect_language`](actions/detect_language.md) — Detect the language segments used in a text fragment with optional language hints and delimiter settings.
- [`extract_text`](actions/extract_text.md) — Remove markup such as HTML, CSS, JavaScript, or JSON from UTF-8 text and return plain decoded text.
- [`list_supported_languages`](actions/list_supported_languages.md) — List the languages currently supported by Tisane.
- [`transform_text`](actions/transform_text.md) — Translate text between languages with Tisane, or paraphrase text when source and target languages match.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Tisane state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Tisane is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=tisane
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Tisane homepage: https://tisane.ai
