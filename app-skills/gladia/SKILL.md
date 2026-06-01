---
name: gladia
description: "Gladia (app.gladia.io). Use this skill for ANY Gladia request — reading, creating, updating, and deleting data. Whenever a task involves Gladia, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Gladia"
  author: "OOMOL"
  version: "1.0.0"
  service: "gladia"
  categories: "AI, Design & Media"
  homepage: "https://app.gladia.io/"
  icon: "https://static.oomol.com/logo/third-party/gladia.svg"
---

# Gladia

Operate **Gladia** through your OOMOL-connected account. This skill calls the `gladia` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Gladia. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gladia" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gladia" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_transcription`](actions/delete_transcription.md) — Delete a Gladia pre-recorded transcription job and its associated data.
- [`download_transcription_audio`](actions/download_transcription_audio.md) — Download the original audio file for a Gladia pre-recorded transcription and store it in connector transit storage.
- [`get_transcription`](actions/get_transcription.md) — Retrieve a Gladia pre-recorded transcription job by ID, including results when done.
- [`list_transcriptions`](actions/list_transcriptions.md) — List Gladia pre-recorded transcription jobs with optional pagination, date, status, and metadata filters.
- [`start_transcription`](actions/start_transcription.md) — Start an asynchronous Gladia pre-recorded transcription job from a public audio or video URL.
- [`upload_file`](actions/upload_file.md) — Upload an audio or video file up to 100 MiB to Gladia from a local file path, connector transit file, base64 content, or public URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Gladia state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Gladia is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gladia
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Gladia homepage: https://app.gladia.io/
