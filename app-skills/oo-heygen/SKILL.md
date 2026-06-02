---
name: oo-heygen
description: "HeyGen (heygen.com). Use this skill for ANY HeyGen request — reading, creating, updating, and deleting data. Whenever a task involves HeyGen, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "HeyGen"
  author: "OOMOL"
  version: "1.0.0"
  service: "heygen"
  categories: "AI, Design & Media"
  homepage: "https://www.heygen.com"
  icon: "https://static.oomol.com/logo/third-party/HeyGen.svg"
---

# HeyGen

Operate **HeyGen** through your OOMOL-connected account. This skill calls the `heygen` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Design & Media. Exposes 17 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected HeyGen. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "heygen" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "heygen" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_asset`](actions/delete_asset.md) — Delete a HeyGen asset that is no longer needed.
- [`delete_video`](actions/delete_video.md) — Delete a generated or translated HeyGen video that is no longer needed.
- [`generate_template_video`](actions/generate_template_video.md) — Start an asynchronous HeyGen template video generation job with explicit template variables.
- [`generate_video`](actions/generate_video.md) — Start an asynchronous HeyGen avatar video generation job and return the generated video ID.
- [`get_avatar`](actions/get_avatar.md) — Retrieve details for a single HeyGen avatar by avatar ID.
- [`get_current_user`](actions/get_current_user.md) — Retrieve profile information for the HeyGen account associated with the API key.
- [`get_remaining_quota`](actions/get_remaining_quota.md) — Retrieve the remaining generation quota for the authenticated HeyGen account.
- [`get_shareable_video_url`](actions/get_shareable_video_url.md) — Retrieve a public share URL for a rendered HeyGen video by video ID.
- [`get_template`](actions/get_template.md) — Retrieve variable definitions and metadata for a single HeyGen template.
- [`get_video_status`](actions/get_video_status.md) — Retrieve processing status and download URLs for a HeyGen video by video ID.
- [`list_assets`](actions/list_assets.md) — List uploaded HeyGen image, video, and audio assets so they can be reused in video generation.
- [`list_avatars`](actions/list_avatars.md) — List HeyGen avatars and talking photos available for video generation.
- [`list_folders`](actions/list_folders.md) — List HeyGen folders and folder IDs that can be used with HeyGen video generation inputs.
- [`list_templates`](actions/list_templates.md) — List HeyGen templates created under the authenticated account.
- [`list_videos`](actions/list_videos.md) — List generated HeyGen videos for historical result management.
- [`list_voices`](actions/list_voices.md) — List HeyGen voices available for video narration.
- [`upload_asset`](actions/upload_asset.md) — Upload an image, video, or audio file to HeyGen and return an asset ID usable in video generation.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change HeyGen state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — HeyGen is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=heygen
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- HeyGen homepage: https://www.heygen.com
