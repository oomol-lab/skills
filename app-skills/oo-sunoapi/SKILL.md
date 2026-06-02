---
name: oo-sunoapi
description: "SunoAPI (sunoapi.org). Use this skill for ANY SunoAPI request — reading, creating, and updating data. Whenever a task involves SunoAPI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SunoAPI"
  author: "OOMOL"
  version: "1.0.0"
  service: "sunoapi"
  categories: "AI, Design & Media"
  homepage: "https://sunoapi.org"
  icon: "https://static.oomol.com/logo/third-party/sunoapi.png"
---

# SunoAPI

Operate **SunoAPI** through your OOMOL-connected account. This skill calls the `sunoapi` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 26 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SunoAPI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sunoapi" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sunoapi" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_instrumental`](actions/add_instrumental.md) — Submit a SunoAPI add instrumental task and return the task identifier.
- [`add_vocals`](actions/add_vocals.md) — Submit a SunoAPI add vocals task and return the task identifier.
- [`boost_music_style`](actions/boost_music_style.md) — Boost a SunoAPI style prompt and return the generated style text.
- [`convert_to_wav_format`](actions/convert_to_wav_format.md) — Submit a SunoAPI WAV conversion task and return the task identifier.
- [`create_music_video`](actions/create_music_video.md) — Submit a SunoAPI music video task and return the task identifier.
- [`extend_music`](actions/extend_music.md) — Submit a SunoAPI music extension task and return the task identifier.
- [`generate_lyrics`](actions/generate_lyrics.md) — Submit a SunoAPI lyrics generation task and return the task identifier.
- [`generate_mashup`](actions/generate_mashup.md) — Submit a SunoAPI mashup task and return the task identifier.
- [`generate_midi`](actions/generate_midi.md) — Submit a SunoAPI MIDI task and return the task identifier.
- [`generate_music`](actions/generate_music.md) — Submit a SunoAPI music generation task and return the task identifier.
- [`generate_music_cover`](actions/generate_music_cover.md) — Submit a SunoAPI music cover task and return the task identifier.
- [`generate_persona`](actions/generate_persona.md) — Submit a SunoAPI persona generation task and return the generated persona details.
- [`generate_sounds`](actions/generate_sounds.md) — Submit a SunoAPI sounds task and return the task identifier.
- [`get_lyrics_generation_details`](actions/get_lyrics_generation_details.md) — Fetch SunoAPI lyrics generation details for a task.
- [`get_midi_generation_details`](actions/get_midi_generation_details.md) — Fetch SunoAPI MIDI generation details for a task.
- [`get_music_cover_details`](actions/get_music_cover_details.md) — Fetch SunoAPI music cover details for a task.
- [`get_music_generation_details`](actions/get_music_generation_details.md) — Fetch SunoAPI music generation details for a task.
- [`get_music_video_details`](actions/get_music_video_details.md) — Fetch SunoAPI music video details for a task.
- [`get_remaining_credits`](actions/get_remaining_credits.md) — Fetch the remaining SunoAPI credits for the authenticated account.
- [`get_timestamped_lyrics`](actions/get_timestamped_lyrics.md) — Fetch SunoAPI timestamped lyrics for a track.
- [`get_vocal_separation_details`](actions/get_vocal_separation_details.md) — Fetch SunoAPI vocal separation details for a task.
- [`get_wav_conversion_details`](actions/get_wav_conversion_details.md) — Fetch SunoAPI WAV conversion details for a task.
- [`replace_music_section`](actions/replace_music_section.md) — Submit a SunoAPI section replacement task and return the task identifier.
- [`separate_vocals_from_music`](actions/separate_vocals_from_music.md) — Separate vocals from music and return the submitted SunoAPI task identifier.
- [`upload_and_cover_audio`](actions/upload_and_cover_audio.md) — Submit a SunoAPI upload and cover task and return the task identifier.
- [`upload_and_extend_audio`](actions/upload_and_extend_audio.md) — Submit a SunoAPI upload and extend task and return the task identifier.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SunoAPI state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SunoAPI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=sunoapi
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SunoAPI homepage: https://sunoapi.org
