---
name: vapi
description: "Vapi (vapi.ai). Use this skill for ANY Vapi request — reading, creating, updating, and deleting data. Whenever a task involves Vapi, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Vapi"
  author: "OOMOL"
  version: "1.0.0"
  service: "vapi"
  categories: "AI, Communication"
  homepage: "https://vapi.ai"
  icon: "https://static.oomol.com/logo/third-party/Vapi.svg"
---

# Vapi

Operate **Vapi** through your OOMOL-connected account. This skill calls the `vapi` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Communication. Exposes 38 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Vapi. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "vapi" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "vapi" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_analytics_query`](actions/create_analytics_query.md) — Create and execute one or more Vapi analytics queries across call and subscription data.
- [`create_assistant`](actions/create_assistant.md) — Create a new Vapi assistant with required transcriber, voice, and model settings plus optional messaging and duration controls.
- [`create_eval`](actions/create_eval.md) — Create a Vapi eval for a mock conversation and define the checkpoint messages used to evaluate model behavior.
- [`create_openai_chat`](actions/create_openai_chat.md) — Create an OpenAI-compatible Vapi chat response using an assistant or squad, with optional session and transport settings.
- [`create_phone_number`](actions/create_phone_number.md) — Create a Vapi phone number using Vapi, Twilio, Vonage, Telnyx, or bring-your-own provider settings.
- [`create_policy`](actions/create_policy.md) — Create a Vapi monitoring policy with severity, threshold, and schedule or interval configuration.
- [`create_provider_resource`](actions/create_provider_resource.md) — Create a pronunciation dictionary provider resource in Vapi, defaulting to the 11labs pronunciation-dictionary route used by the upstream toolkit.
- [`create_scorecard`](actions/create_scorecard.md) — Create a Vapi scorecard for observability and evaluation using structured output metrics and conditions.
- [`create_session`](actions/create_session.md) — Create a Vapi session with either an assistant identifier or an inline assistant configuration.
- [`delete_call`](actions/delete_call.md) — Delete a Vapi call by its unique identifier.
- [`delete_chat`](actions/delete_chat.md) — Delete a Vapi chat by its unique identifier.
- [`delete_eval`](actions/delete_eval.md) — Delete a Vapi eval by its unique identifier.
- [`delete_eval_run`](actions/delete_eval_run.md) — Delete a Vapi eval run by its unique identifier.
- [`delete_phone_number`](actions/delete_phone_number.md) — Delete a Vapi phone number by its unique identifier.
- [`get_assistant`](actions/get_assistant.md) — Retrieve a Vapi assistant by its unique identifier.
- [`get_call`](actions/get_call.md) — Retrieve a single Vapi call by its unique identifier.
- [`get_chat`](actions/get_chat.md) — Retrieve a Vapi chat by its unique identifier.
- [`get_eval`](actions/get_eval.md) — Retrieve a Vapi eval by its unique identifier.
- [`get_file`](actions/get_file.md) — Retrieve Vapi file metadata by file identifier.
- [`get_tool`](actions/get_tool.md) — Retrieve a Vapi tool by its unique identifier.
- [`list_assistants`](actions/list_assistants.md) — List Vapi assistants with optional created/updated timestamp filters and a configurable page size.
- [`list_calls`](actions/list_calls.md) — List Vapi calls with optional filtering by call, assistant, phone number, and created or updated timestamps.
- [`list_chats`](actions/list_chats.md) — List Vapi chats with pagination plus optional assistant, squad, session, previous chat, and timestamp filters.
- [`list_evals`](actions/list_evals.md) — List Vapi evals with pagination plus optional identifier and timestamp-based filters.
- [`list_insights`](actions/list_insights.md) — List Vapi insights with pagination plus optional identifier and timestamp filters.
- [`list_monitoring_policies`](actions/list_monitoring_policies.md) — List Vapi monitoring policies with optional severity, monitor, and timestamp filters.
- [`list_phone_numbers`](actions/list_phone_numbers.md) — List Vapi phone numbers with optional created and updated timestamp filters.
- [`list_provider_resources`](actions/list_provider_resources.md) — List Vapi provider resources for a provider and resource type with optional identifier and timestamp filters.
- [`list_scorecards`](actions/list_scorecards.md) — List Vapi scorecards with pagination plus optional identifier and timestamp filters.
- [`list_sessions`](actions/list_sessions.md) — List Vapi sessions with pagination plus optional identifier, name, assistant, workflow, squad, and timestamp filters.
- [`list_structured_outputs`](actions/list_structured_outputs.md) — List Vapi structured outputs with pagination plus optional identifier, name, and timestamp filters.
- [`test_code_tool_execution`](actions/test_code_tool_execution.md) — Execute TypeScript code inside Vapi's code tool sandbox and return the logs, result, and execution outcome.
- [`update_assistant`](actions/update_assistant.md) — Update an existing Vapi assistant and keep only the fields that should change in the request body.
- [`update_eval`](actions/update_eval.md) — Update a Vapi eval and keep only the fields that should change in the request body.
- [`update_insight`](actions/update_insight.md) — Update a Vapi insight by replacing its name, queries, formulas, grouping, and time range settings.
- [`update_phone_number`](actions/update_phone_number.md) — Update a Vapi phone number and keep only the fields that should change in the request body.
- [`update_tool`](actions/update_tool.md) — Update a Vapi tool configuration, including function definitions, HTTP request settings, and retry policies.
- [`upload_file`](actions/upload_file.md) — Upload a file to Vapi knowledge storage from a public URL or base64 payload and return the resulting file metadata.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Vapi state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Vapi is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=vapi
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Vapi homepage: https://vapi.ai
