---
name: amara
description: "Amara (amara.org). Use this skill for ANY Amara request — reading, creating, updating, and deleting data. Whenever a task involves Amara, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Amara"
  author: "OOMOL"
  version: "1.0.0"
  service: "amara"
  categories: "Design & Media, Productivity"
  homepage: "https://amara.org"
  icon: "https://static.oomol.com/logo/third-party/Amara.svg"
---

# Amara

Operate **Amara** through your OOMOL-connected account. This skill calls the `amara` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Productivity. Exposes 33 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Amara. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "amara" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "amara" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_subtitle_note`](actions/add_subtitle_note.md) — Add a subtitle note for a specific video and subtitle language.
- [`add_video_url`](actions/add_video_url.md) — Add a new source URL to an existing Amara video.
- [`create_subtitle_language`](actions/create_subtitle_language.md) — Create a new subtitle language track for an Amara video.
- [`create_subtitles`](actions/create_subtitles.md) — Create a new subtitle version for a specific video and language.
- [`create_video`](actions/create_video.md) — Create a new Amara video from a source URL and title, with optional metadata.
- [`delete_video_url`](actions/delete_video_url.md) — Delete a source URL from an existing Amara video.
- [`fetch_subtitles_data`](actions/fetch_subtitles_data.md) — Fetch subtitle data for a specific video and language in JSON, SRT, or VTT format.
- [`get_activity`](actions/get_activity.md) — Fetch a single Amara activity item by activity ID.
- [`get_subtitle_language_details`](actions/get_subtitle_language_details.md) — Fetch a single subtitle language track for an Amara video.
- [`get_team_details`](actions/get_team_details.md) — Fetch a single Amara team by team slug.
- [`get_team_languages`](actions/get_team_languages.md) — Fetch preferred and blacklisted language codes for a single Amara team.
- [`get_user`](actions/get_user.md) — Fetch a single Amara user by username or user ID.
- [`get_user_activity`](actions/get_user_activity.md) — List activity items for a specific Amara user.
- [`get_user_data`](actions/get_user_data.md) — Fetch a single Amara user by username, `me`, or user ID.
- [`get_video`](actions/get_video.md) — Fetch a single Amara video by video ID.
- [`get_video_url`](actions/get_video_url.md) — Fetch a single Amara video URL entry by video ID and URL ID.
- [`get_video_url_details`](actions/get_video_url_details.md) — Look up Amara metadata for a public or embeddable video URL.
- [`list_activity`](actions/list_activity.md) — List Amara activity items with optional team, video, language, and date filters.
- [`list_available_languages`](actions/list_available_languages.md) — List the languages supported by the Amara API.
- [`list_languages`](actions/list_languages.md) — List the languages supported by the Amara API.
- [`list_subtitle_actions`](actions/list_subtitle_actions.md) — List the subtitle workflow actions available for a specific video and language.
- [`list_subtitle_languages`](actions/list_subtitle_languages.md) — List all subtitle language tracks for a single Amara video.
- [`list_subtitle_notes`](actions/list_subtitle_notes.md) — List all subtitle notes for a specific video and subtitle language.
- [`list_teams`](actions/list_teams.md) — List the Amara teams accessible to the current API key with pagination controls.
- [`list_video_activity`](actions/list_video_activity.md) — List activity items for a single Amara video with pagination controls.
- [`list_video_urls`](actions/list_video_urls.md) — List all source URLs associated with a single Amara video.
- [`list_videos`](actions/list_videos.md) — List Amara videos with optional filters, sorting, and pagination controls.
- [`make_video_url_primary`](actions/make_video_url_primary.md) — Update a video URL entry and mark it as the primary URL when requested.
- [`perform_subtitle_action`](actions/perform_subtitle_action.md) — Perform a subtitle workflow action such as publish, approve, or reject.
- [`send_message`](actions/send_message.md) — Send a message to an Amara user or team recipient.
- [`update_subtitle_language`](actions/update_subtitle_language.md) — Update subtitle language settings such as completion flags and soft limits.
- [`update_video`](actions/update_video.md) — Update an existing Amara video's metadata, assignment, or language settings.
- [`view_video_details`](actions/view_video_details.md) — Fetch a single Amara video by video ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Amara state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Amara is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=amara
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Amara homepage: https://amara.org
