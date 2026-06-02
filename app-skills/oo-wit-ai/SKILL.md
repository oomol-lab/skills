---
name: oo-wit-ai
description: "Wit.ai (wit.ai). Use this skill for ANY Wit.ai request — reading, creating, updating, and deleting data. Whenever a task involves Wit.ai, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Wit.ai"
  author: "OOMOL"
  version: "1.0.0"
  service: "wit_ai"
  categories: "AI, Developer Tools"
  homepage: "https://wit.ai"
  icon: "https://static.oomol.com/logo/third-party/Wit.ai.svg"
---

# Wit.ai

Operate **Wit.ai** through your OOMOL-connected account. This skill calls the `wit_ai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 20 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Wit.ai. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "wit_ai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "wit_ai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_entity_keyword`](actions/add_entity_keyword.md) — Add a keyword and optional synonyms to an existing Wit.ai entity.
- [`add_keyword_synonym`](actions/add_keyword_synonym.md) — Add a synonym to a specific keyword on a Wit.ai entity.
- [`add_trait_value`](actions/add_trait_value.md) — Add a canonical value to an existing Wit.ai trait.
- [`analyze_message`](actions/analyze_message.md) — Analyze a text message and return the intents, entities, and traits inferred by Wit.ai.
- [`create_entity`](actions/create_entity.md) — Create a new Wit.ai entity with optional lookups and keywords.
- [`create_intent`](actions/create_intent.md) — Create a new Wit.ai intent for labeling user messages.
- [`create_trait`](actions/create_trait.md) — Create a new Wit.ai trait with one or more canonical values.
- [`create_utterances`](actions/create_utterances.md) — Asynchronously enqueue validated utterances for training in Wit.ai.
- [`delete_utterances`](actions/delete_utterances.md) — Asynchronously delete validated utterances from the current Wit.ai app.
- [`detect_language`](actions/detect_language.md) — Detect the most likely locales for a text message using Wit.ai language identification.
- [`get_app`](actions/get_app.md) — Retrieve details and training status for a specific Wit.ai app.
- [`get_entity`](actions/get_entity.md) — Retrieve a Wit.ai entity including its roles, lookups, and keywords.
- [`get_intent`](actions/get_intent.md) — Retrieve a Wit.ai intent together with the entity bindings it uses.
- [`get_trait`](actions/get_trait.md) — Retrieve a Wit.ai trait together with its configured values.
- [`list_apps`](actions/list_apps.md) — List the Wit.ai apps accessible by the current bearer token.
- [`list_entities`](actions/list_entities.md) — List all entities defined in the current Wit.ai app.
- [`list_intents`](actions/list_intents.md) — List all intents defined in the current Wit.ai app.
- [`list_traits`](actions/list_traits.md) — List all traits defined in the current Wit.ai app.
- [`list_utterances`](actions/list_utterances.md) — List validated utterances already stored in the current Wit.ai app.
- [`update_entity`](actions/update_entity.md) — Update a Wit.ai entity by sending the desired end-state definition for its schema and keywords.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Wit.ai state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Wit.ai is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=wit_ai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Wit.ai homepage: https://wit.ai
