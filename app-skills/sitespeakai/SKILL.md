---
name: sitespeakai
description: "SiteSpeakAI (sitespeak.ai). Use this skill for ANY SiteSpeakAI request — reading, creating, updating, and deleting data. Whenever a task involves SiteSpeakAI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SiteSpeakAI"
  author: "OOMOL"
  version: "1.0.0"
  service: "sitespeakai"
  categories: "AI, Communication"
  homepage: "https://sitespeak.ai"
  icon: "https://static.oomol.com/logo/third-party/sitespeakai.png"
---

# SiteSpeakAI

Operate **SiteSpeakAI** through your OOMOL-connected account. This skill calls the `sitespeakai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Communication. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SiteSpeakAI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sitespeakai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sitespeakai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_updated_answer`](actions/delete_updated_answer.md) — Delete one SiteSpeakAI updated answer entry from a chatbot.
- [`get_chatbot`](actions/get_chatbot.md) — Retrieve the full SiteSpeakAI settings object for one chatbot.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the connected SiteSpeakAI user account details.
- [`list_chatbots`](actions/list_chatbots.md) — List every SiteSpeakAI chatbot available to the connected account.
- [`list_conversations`](actions/list_conversations.md) — Retrieve conversation history for one SiteSpeakAI chatbot.
- [`list_leads`](actions/list_leads.md) — List the leads captured by one SiteSpeakAI chatbot.
- [`list_sources`](actions/list_sources.md) — List the training sources and training statuses for one SiteSpeakAI chatbot.
- [`list_suggested_messages`](actions/list_suggested_messages.md) — List the suggested visitor prompts configured for one SiteSpeakAI chatbot.
- [`list_updated_answers`](actions/list_updated_answers.md) — List the updated answers configured for one SiteSpeakAI chatbot.
- [`query_chatbot`](actions/query_chatbot.md) — Send a question to one SiteSpeakAI chatbot and return its answer plus source URLs.
- [`upsert_updated_answer`](actions/upsert_updated_answer.md) — Create or update one SiteSpeakAI updated answer entry for a chatbot.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SiteSpeakAI state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SiteSpeakAI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=sitespeakai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SiteSpeakAI homepage: https://sitespeak.ai
