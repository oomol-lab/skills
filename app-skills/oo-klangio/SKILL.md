---
name: oo-klangio
description: "Klangio (klang.io). Use this skill for ANY Klangio request — reading, creating, and updating data. Whenever a task involves Klangio, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Klangio"
  author: "OOMOL"
  version: "1.0.0"
  service: "klangio"
  categories: "AI, Design & Media"
  homepage: "https://klang.io"
  icon: "https://static.oomol.com/logo/third-party/klangio.svg"
---

# Klangio

Operate **Klangio** through your OOMOL-connected account. This skill calls the `klangio` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Klangio. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "klangio" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "klangio" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_beat_tracking_job`](actions/create_beat_tracking_job.md) — Create a Klangio beat and downbeat tracking job from a URL or Base64 audio file.
- [`create_chord_recognition_extended_job`](actions/create_chord_recognition_extended_job.md) — Create a Klangio chord recognition job with extended key detection from a URL or Base64 audio file.
- [`create_chord_recognition_job`](actions/create_chord_recognition_job.md) — Create a Klangio chord recognition job from a URL or Base64 audio file.
- [`create_source_separation_job`](actions/create_source_separation_job.md) — Create a Klangio source separation job from a URL or Base64 audio file.
- [`create_strum_recognition_job`](actions/create_strum_recognition_job.md) — Create a Klangio guitar strum recognition job from a URL or Base64 audio file.
- [`create_transcription_job`](actions/create_transcription_job.md) — Create a Klangio transcription job from a URL or Base64 audio file and requested score outputs.
- [`download_job_result`](actions/download_job_result.md) — Download a generated Klangio job result file and upload it to OOMOL OSS transit storage.
- [`download_source_separation_audio`](actions/download_source_separation_audio.md) — Download a Klangio source separation stem audio file and upload it to OOMOL OSS transit storage.
- [`get_job_status`](actions/get_job_status.md) — Fetch the current processing status for a Klangio job.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Klangio state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Klangio is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=klangio
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Klangio homepage: https://klang.io
