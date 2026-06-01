---
name: figma
description: "Figma (figma.com). Use this skill for ANY Figma request — reading, creating, updating, and deleting data. Whenever a task involves Figma, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Figma"
  author: "OOMOL"
  version: "1.0.0"
  service: "figma"
  categories: "Design & Media, Productivity"
  homepage: "https://www.figma.com"
  icon: "https://static.oomol.com/logo/third-party/figma.svg"
---

# Figma

Operate **Figma** through your OOMOL-connected account. This skill calls the `figma` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Productivity. Exposes 26 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Figma. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "figma" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "figma" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_dev_resources`](actions/create_dev_resources.md) — Create dev resources and attach them to Figma file nodes.
- [`delete_comment`](actions/delete_comment.md) — Delete a Figma comment created by the authenticated user.
- [`delete_comment_reaction`](actions/delete_comment_reaction.md) — Delete an emoji reaction created by the authenticated user.
- [`delete_dev_resource`](actions/delete_dev_resource.md) — Delete a Figma dev resource from a main file.
- [`get_component`](actions/get_component.md) — Get metadata for a published Figma component by key.
- [`get_component_set`](actions/get_component_set.md) — Get metadata for a published Figma component set by key.
- [`get_current_user`](actions/get_current_user.md) — Get the current Figma user associated with the API key.
- [`get_dev_resources`](actions/get_dev_resources.md) — Get dev resources attached to a Figma main file.
- [`get_file`](actions/get_file.md) — Get the JSON document for a Figma file or branch.
- [`get_file_metadata`](actions/get_file_metadata.md) — Get lightweight metadata for a Figma file without fetching its full document.
- [`get_file_nodes`](actions/get_file_nodes.md) — Get JSON for selected node IDs from a Figma file or branch.
- [`get_image_fills`](actions/get_image_fills.md) — Get temporary download URLs for image fills used in a Figma file.
- [`get_project_metadata`](actions/get_project_metadata.md) — Get metadata for a Figma project.
- [`get_style`](actions/get_style.md) — Get metadata for a published Figma style by key.
- [`list_comment_reactions`](actions/list_comment_reactions.md) — List emoji reactions on a Figma file comment.
- [`list_comments`](actions/list_comments.md) — List comments on a Figma file or branch.
- [`list_file_component_sets`](actions/list_file_component_sets.md) — List published component sets in a Figma main file library.
- [`list_file_components`](actions/list_file_components.md) — List published components in a Figma main file library.
- [`list_file_styles`](actions/list_file_styles.md) — List published styles in a Figma main file library.
- [`list_file_versions`](actions/list_file_versions.md) — List version history records for a Figma file.
- [`list_project_files`](actions/list_project_files.md) — List files in a Figma project.
- [`list_team_projects`](actions/list_team_projects.md) — List projects visible to the authenticated user in a Figma team.
- [`post_comment`](actions/post_comment.md) — Post a comment on a Figma file or branch.
- [`post_comment_reaction`](actions/post_comment_reaction.md) — Add an emoji reaction to a Figma file comment.
- [`render_images`](actions/render_images.md) — Render selected Figma file nodes and return temporary image URLs.
- [`update_dev_resources`](actions/update_dev_resources.md) — Update existing Figma dev resources.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Figma state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Figma is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=figma
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Figma homepage: https://www.figma.com
