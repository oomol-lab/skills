---
name: gemini
description: "Gemini (ai.google.dev). Use this skill for ANY Gemini request — searching and reading data. Whenever a task involves Gemini, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Gemini"
  author: "OOMOL"
  version: "1.0.0"
  service: "gemini"
  categories: "AI"
  homepage: "https://ai.google.dev/gemini-api"
  icon: "https://static.oomol.com/logo/third-party/Gemini.svg"
---

# Gemini

Operate **Gemini** through your OOMOL-connected account. This skill calls the `gemini` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Gemini. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gemini" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gemini" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`count_tokens`](actions/count_tokens.md) — Count the Gemini token usage for input text.
- [`embed_content`](actions/embed_content.md) — Generate Gemini embeddings for text content.
- [`generate_content`](actions/generate_content.md) — Generate text or speech audio with Gemini models.
- [`generate_image`](actions/generate_image.md) — Generate an image with Gemini and return a transit URL.
- [`generate_videos`](actions/generate_videos.md) — Start a Gemini Veo video generation operation.
- [`get_videos_operation`](actions/get_videos_operation.md) — Fetch the current status for a Gemini Veo operation.
- [`list_models`](actions/list_models.md) — List the available Gemini and Veo models.
- [`wait_for_video`](actions/wait_for_video.md) — Poll a Gemini Veo operation and return the finished video via transit URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Gemini state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Gemini is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gemini
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Gemini homepage: https://ai.google.dev/gemini-api
