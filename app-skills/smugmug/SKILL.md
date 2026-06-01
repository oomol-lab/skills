---
name: smugmug
description: "SmugMug (smugmug.com). Use this skill for ANY SmugMug request — searching and reading data. Whenever a task involves SmugMug, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SmugMug"
  author: "OOMOL"
  version: "1.0.0"
  service: "smugmug"
  categories: "Design & Media, Storage"
  homepage: "https://www.smugmug.com"
  icon: "https://static.oomol.com/logo/third-party/SmugMug.svg"
---

# SmugMug

Operate **SmugMug** through your OOMOL-connected account. This skill calls the `smugmug` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Storage. Exposes 23 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SmugMug. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "smugmug" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "smugmug" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_album`](actions/get_album.md) — Retrieve a SmugMug album by album key.
- [`get_album_highlight_image`](actions/get_album_highlight_image.md) — Retrieve the highlight image for a SmugMug album.
- [`get_album_image`](actions/get_album_image.md) — Retrieve a specific image within a SmugMug album context.
- [`get_album_images`](actions/get_album_images.md) — List the images contained in a SmugMug album.
- [`get_folder_albums`](actions/get_folder_albums.md) — List the direct albums under a SmugMug folder path.
- [`get_folder_by_user_path`](actions/get_folder_by_user_path.md) — Retrieve a SmugMug folder by user nickname and folder path.
- [`get_folder_details`](actions/get_folder_details.md) — Retrieve folder details for a SmugMug folder node by node ID.
- [`get_folder_subfolders`](actions/get_folder_subfolders.md) — List the direct subfolders under a SmugMug folder path.
- [`get_image`](actions/get_image.md) — Retrieve a SmugMug image by image key.
- [`get_image_metadata`](actions/get_image_metadata.md) — Retrieve the metadata extracted from a SmugMug image file.
- [`get_image_size_details`](actions/get_image_size_details.md) — Retrieve the full SmugMug image size details payload for an image.
- [`get_image_sizes`](actions/get_image_sizes.md) — Summarize the usable image sizes for a SmugMug image from the official image size details payload.
- [`get_node_highlight_image`](actions/get_node_highlight_image.md) — Retrieve the highlight image for a SmugMug node.
- [`get_node_parent`](actions/get_node_parent.md) — Retrieve the direct parent node of a SmugMug node.
- [`get_node_parents`](actions/get_node_parents.md) — Retrieve the breadcrumb trail of parent nodes for a SmugMug node.
- [`get_user`](actions/get_user.md) — Retrieve a SmugMug user by nickname.
- [`get_user_bio_image`](actions/get_user_bio_image.md) — Retrieve the bio image for a SmugMug user.
- [`get_user_featured_albums`](actions/get_user_featured_albums.md) — Retrieve the featured albums for a SmugMug user.
- [`get_user_features`](actions/get_user_features.md) — Retrieve the feature and entitlement map for a SmugMug user.
- [`get_user_profile`](actions/get_user_profile.md) — Retrieve the public profile for a SmugMug user.
- [`get_user_root_node`](actions/get_user_root_node.md) — Retrieve the root node for a SmugMug user.
- [`list_child_nodes`](actions/list_child_nodes.md) — List the immediate child nodes under a SmugMug node.
- [`search_user_content`](actions/search_user_content.md) — Search a SmugMug user's images by query text, with optional ordering and pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SmugMug state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SmugMug is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=smugmug
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SmugMug homepage: https://www.smugmug.com
