---
name: openai
description: "OpenAI (openai.com). Use this skill for ANY OpenAI request — reading, creating, and updating data. Whenever a task involves OpenAI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OpenAI"
  author: "OOMOL"
  version: "1.0.0"
  service: "openai"
  categories: "AI, Developer Tools"
  homepage: "https://openai.com/api/"
  icon: "https://static.oomol.com/logo/third-party/OpenAI.svg"
---

# OpenAI

Operate **OpenAI** through your OOMOL-connected account. This skill calls the `openai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected OpenAI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "openai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "openai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_batch`](actions/cancel_batch.md) — Cancel one OpenAI batch job by its identifier.
- [`create_audio_transcription`](actions/create_audio_transcription.md) — Transcribe one uploaded audio file with the OpenAI audio transcription API.
- [`create_audio_translation`](actions/create_audio_translation.md) — Translate one uploaded audio file into English with the OpenAI audio translation API.
- [`create_batch`](actions/create_batch.md) — Create an OpenAI batch job from an uploaded input file.
- [`create_embeddings`](actions/create_embeddings.md) — Create embeddings with an OpenAI embedding model.
- [`create_image`](actions/create_image.md) — Generate images with the OpenAI image generation API.
- [`create_moderation`](actions/create_moderation.md) — Classify text or image inputs with the OpenAI Moderations API.
- [`create_response`](actions/create_response.md) — Create a non-streaming OpenAI response through the Responses API.
- [`create_speech`](actions/create_speech.md) — Synthesize speech audio from text with the OpenAI audio speech API.
- [`get_batch`](actions/get_batch.md) — Fetch one OpenAI batch job by its identifier.
- [`get_input_token_counts`](actions/get_input_token_counts.md) — Count how many input tokens a Responses-style OpenAI request would consume.
- [`get_model`](actions/get_model.md) — Retrieve the metadata for a single OpenAI model by ID.
- [`get_response`](actions/get_response.md) — Retrieve one stored OpenAI response by its identifier.
- [`list_input_items`](actions/list_input_items.md) — List the stored input items for one OpenAI response.
- [`list_models`](actions/list_models.md) — List the OpenAI models available to the current API key.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change OpenAI state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — OpenAI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=openai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- OpenAI homepage: https://openai.com/api/
