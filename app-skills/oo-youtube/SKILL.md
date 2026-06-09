---
name: oo-youtube
description: "YouTube (youtube.com). Use this skill for ANY YouTube request — reading, creating, updating, and deleting data. Whenever a task involves YouTube, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "YouTube"
  author: "OOMOL"
  version: "1.0.0"
  service: "youtube"
  categories: "Design & Media, Social"
  homepage: "https://www.youtube.com/"
---

# YouTube

Operate **YouTube** through your OOMOL-connected account. This skill calls the `youtube` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Social. Exposes 29 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected YouTube. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "youtube" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "youtube" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_video_to_playlist`](actions/add_video_to_playlist.md) — Add a YouTube video to a playlist.
- [`create_comment_reply`](actions/create_comment_reply.md) — Reply to an existing YouTube comment thread.
- [`create_playlist`](actions/create_playlist.md) — Create a YouTube playlist owned by the authenticated user.
- [`delete_caption`](actions/delete_caption.md) — Delete a YouTube caption track.
- [`delete_playlist`](actions/delete_playlist.md) — Delete a YouTube playlist owned by the authenticated user.
- [`delete_playlist_item`](actions/delete_playlist_item.md) — Delete an item from a YouTube playlist.
- [`delete_video`](actions/delete_video.md) — Delete a YouTube video owned by the authenticated user.
- [`download_caption`](actions/download_caption.md) — Download a YouTube caption track and return a temporary transit URL.
- [`get_video_rating`](actions/get_video_rating.md) — Get the authenticated user's rating for one or more YouTube videos.
- [`list_caption_tracks`](actions/list_caption_tracks.md) — List YouTube caption tracks for a video or caption track IDs.
- [`list_channels`](actions/list_channels.md) — List YouTube channel resources by ID, username, handle, or authenticated owner.
- [`list_comment_threads`](actions/list_comment_threads.md) — List top-level YouTube comment threads for a video, channel, or thread IDs.
- [`list_comments`](actions/list_comments.md) — List YouTube comments by parent comment ID or comment IDs.
- [`list_i18n_languages`](actions/list_i18n_languages.md) — List YouTube interface languages.
- [`list_i18n_regions`](actions/list_i18n_regions.md) — List YouTube content regions.
- [`list_playlist_items`](actions/list_playlist_items.md) — List videos and resources contained in a YouTube playlist.
- [`list_playlists`](actions/list_playlists.md) — List YouTube playlists by ID, channel, or authenticated owner.
- [`list_video_categories`](actions/list_video_categories.md) — List YouTube video categories for a region or category IDs.
- [`list_videos`](actions/list_videos.md) — List YouTube video resources by ID or chart.
- [`post_comment`](actions/post_comment.md) — Post a top-level public comment on a YouTube video.
- [`rate_video`](actions/rate_video.md) — Set or clear the authenticated user's rating for a YouTube video.
- [`search`](actions/search.md) — Search YouTube for videos, channels, or playlists.
- [`set_thumbnail_from_url`](actions/set_thumbnail_from_url.md) — Upload and set a custom YouTube video thumbnail from an HTTPS image URL.
- [`update_caption`](actions/update_caption.md) — Update a YouTube caption track's metadata.
- [`update_playlist`](actions/update_playlist.md) — Update a YouTube playlist's snippet and status metadata.
- [`update_playlist_item`](actions/update_playlist_item.md) — Update a YouTube playlist item's position or note.
- [`update_video`](actions/update_video.md) — Update a YouTube video's snippet and status metadata.
- [`upload_caption_from_url`](actions/upload_caption_from_url.md) — Upload a YouTube caption track from an HTTPS caption file URL.
- [`upload_video_from_url`](actions/upload_video_from_url.md) — Upload a YouTube video from an HTTPS media URL using the resumable upload API.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change YouTube state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — YouTube is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=youtube
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- YouTube homepage: https://www.youtube.com/
