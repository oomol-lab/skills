---
name: oo-elevenreader
description: "ElevenReader (elevenlabs.io). Use this skill for ANY ElevenReader request — searching and reading data. Whenever a task involves ElevenReader, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ElevenReader"
  author: "OOMOL"
  version: "1.0.0"
  service: "elevenreader"
  categories: "AI, Design & Media"
  homepage: "https://elevenlabs.io/text-reader"
  icon: "https://static.oomol.com/logo/third-party/Elevenreader.svg"
---

# ElevenReader

Operate **ElevenReader** through your OOMOL-connected account. This skill calls the `elevenreader` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ElevenReader. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "elevenreader" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "elevenreader" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_models`](actions/get_models.md) — List available ElevenLabs speech synthesis models for reading text aloud.
- [`get_user_info`](actions/get_user_info.md) — Get the current ElevenReader user profile and subscription snapshot.
- [`get_voice`](actions/get_voice.md) — Get one ElevenLabs voice by voice ID before using it to read text aloud.
- [`read_text`](actions/read_text.md) — Convert text to speech with an ElevenLabs voice and upload the generated audio to connector transit storage.
- [`search_voices`](actions/search_voices.md) — Search available ElevenLabs voices with pagination and filters useful for reading text aloud.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ElevenReader state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ElevenReader is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=elevenreader
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ElevenReader homepage: https://elevenlabs.io/text-reader
