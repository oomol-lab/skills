---
name: vimeo
description: "Vimeo (vimeo.com). Use this skill for ANY Vimeo request — reading, creating, updating, and deleting data. Whenever a task involves Vimeo, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Vimeo"
  author: "OOMOL"
  version: "1.0.0"
  service: "vimeo"
  categories: "Design & Media, Social"
  homepage: "https://vimeo.com"
  icon: "https://static.oomol.com/logo/third-party/vimeo.svg"
---

# Vimeo

Operate **Vimeo** through your OOMOL-connected account. This skill calls the `vimeo` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Social. Exposes 25 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Vimeo. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "vimeo" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "vimeo" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_video_tags`](actions/add_video_tags.md) — Add one or more tags to a Vimeo video.
- [`add_video_to_folder`](actions/add_video_to_folder.md) — Add a Vimeo video to a folder.
- [`add_video_to_showcase`](actions/add_video_to_showcase.md) — Add a Vimeo video to a showcase.
- [`create_folder`](actions/create_folder.md) — Create a Vimeo folder for the authenticated user or a specified Vimeo user.
- [`delete_folder`](actions/delete_folder.md) — Delete a Vimeo folder, optionally deleting the videos inside it.
- [`delete_video`](actions/delete_video.md) — Delete a Vimeo video by ID.
- [`delete_video_tag`](actions/delete_video_tag.md) — Remove a tag from a Vimeo video.
- [`download_video_file`](actions/download_video_file.md) — Download one Vimeo video file link and store it in connector transit storage.
- [`get_current_user`](actions/get_current_user.md) — Get the authenticated Vimeo user profile.
- [`get_folder`](actions/get_folder.md) — Get metadata for a Vimeo folder.
- [`get_showcase`](actions/get_showcase.md) — Get metadata for a specific Vimeo showcase.
- [`get_video`](actions/get_video.md) — Get metadata for a specific Vimeo video.
- [`get_video_download_links`](actions/get_video_download_links.md) — Get temporary downloadable file links for a Vimeo video when Vimeo exposes them.
- [`list_folder_videos`](actions/list_folder_videos.md) — List videos in a Vimeo folder.
- [`list_folders`](actions/list_folders.md) — List folders that belong to the authenticated user or to a specified Vimeo user.
- [`list_showcase_videos`](actions/list_showcase_videos.md) — List videos in a Vimeo showcase.
- [`list_showcases`](actions/list_showcases.md) — List showcases that belong to the authenticated user or to a specified Vimeo user.
- [`list_user_videos`](actions/list_user_videos.md) — List videos uploaded by the authenticated user or by a specified Vimeo user.
- [`list_video_tags`](actions/list_video_tags.md) — List tags attached to a Vimeo video.
- [`remove_video_from_folder`](actions/remove_video_from_folder.md) — Remove a Vimeo video from a folder without deleting the video.
- [`remove_video_from_showcase`](actions/remove_video_from_showcase.md) — Remove a Vimeo video from a showcase.
- [`replace_video_from_url`](actions/replace_video_from_url.md) — Add a new version to an existing Vimeo video by asking Vimeo to pull the replacement media from a URL.
- [`update_folder`](actions/update_folder.md) — Update a Vimeo folder name.
- [`update_video`](actions/update_video.md) — Update basic metadata for a Vimeo video without uploading or replacing media.
- [`upload_video_from_url`](actions/upload_video_from_url.md) — Upload a new Vimeo video by asking Vimeo to pull the media from an HTTP or HTTPS URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Vimeo state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Vimeo is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=vimeo
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Vimeo homepage: https://vimeo.com
