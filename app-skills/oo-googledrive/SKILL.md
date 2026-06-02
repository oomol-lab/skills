---
name: oo-googledrive
description: "Google Drive (workspace.google.com). Use this skill for ANY Google Drive request — reading, creating, updating, and deleting data. Whenever a task involves Google Drive, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Drive"
  author: "OOMOL"
  version: "1.0.0"
  service: "googledrive"
  categories: "Storage, Productivity"
  homepage: "https://workspace.google.com/products/drive/"
  icon: "https://static.oomol.com/logo/third-party/Google%20Drive.svg"
---

# Google Drive

Operate **Google Drive** through your OOMOL-connected account. This skill calls the `googledrive` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Productivity. Exposes 66 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Drive. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googledrive" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googledrive" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`copy_file`](actions/copy_file.md) — Legacy compatibility alias of `copy_file_advanced` with a simplified input shape.
- [`copy_file_advanced`](actions/copy_file_advanced.md) — Copy a Drive file and optionally override metadata such as name, parents, description, or properties.
- [`create_comment`](actions/create_comment.md) — Create a comment on a Drive file, optionally with anchor or quoted file content.
- [`create_drive`](actions/create_drive.md) — Create a new shared drive.
- [`create_file`](actions/create_file.md) — Create a Google Drive file with metadata only. Use a Google Workspace mime type to create an empty native file shell.
- [`create_file_from_text`](actions/create_file_from_text.md) — Create a new Drive file from text content and optional metadata.
- [`create_folder`](actions/create_folder.md) — Create a Google Drive folder, optionally under one or more parent folders.
- [`create_permission`](actions/create_permission.md) — Create a permission on a Drive file or shared drive to share it with users, groups, domains, or anyone.
- [`create_reply`](actions/create_reply.md) — Create a reply under an existing Drive file comment, or use an action payload such as resolve or reopen.
- [`create_team_drive`](actions/create_team_drive.md) — Legacy compatibility alias of `create_drive` for Team Drives.
- [`delete_comment`](actions/delete_comment.md) — Permanently delete a comment thread from a Drive file.
- [`delete_drive`](actions/delete_drive.md) — Permanently delete a shared drive.
- [`delete_file`](actions/delete_file.md) — Legacy compatibility alias for permanently deleting a Drive file by ID.
- [`delete_permission`](actions/delete_permission.md) — Delete a permission from a Drive file or shared drive.
- [`delete_reply`](actions/delete_reply.md) — Permanently delete a specific reply from a Drive file comment thread.
- [`delete_revision`](actions/delete_revision.md) — Permanently delete a specific revision from a Drive file.
- [`delete_team_drive`](actions/delete_team_drive.md) — Legacy compatibility alias of `delete_drive` for Team Drives.
- [`download_file`](actions/download_file.md) — Download a Drive file by ID, or export a Google Workspace file when `mimeType` is provided. Returns a transit URL for the downloaded content.
- [`download_file_operation`](actions/download_file_operation.md) — Compatibility alias of `download_file`.
- [`download_file2`](actions/download_file2.md) — Compatibility alias of `download_file`.
- [`edit_file`](actions/edit_file.md) — Overwrite an existing Drive file with text content and optional metadata changes.
- [`empty_trash`](actions/empty_trash.md) — Permanently empty the user's trash or a shared drive's trash.
- [`export_google_workspace_file`](actions/export_google_workspace_file.md) — Export a Google Workspace file to the requested MIME type and return a transit URL for the exported content.
- [`find_file`](actions/find_file.md) — Search Google Drive files and folders with query, date, starred, trash, and shared-drive filters.
- [`find_folder`](actions/find_folder.md) — Search Google Drive folders only, with the same query and pagination controls as `find_file`.
- [`generate_ids`](actions/generate_ids.md) — Generate one or more Drive file IDs for later create or copy requests.
- [`get_about`](actions/get_about.md) — Get Drive account information such as user details, quota, and supported capabilities.
- [`get_app`](actions/get_app.md) — Get metadata for a specific Google Drive app by app ID.
- [`get_changes_start_page_token`](actions/get_changes_start_page_token.md) — Get the page token for monitoring future Drive changes.
- [`get_comment`](actions/get_comment.md) — Get a specific comment on a Drive file by comment ID.
- [`get_drive`](actions/get_drive.md) — Get a shared drive by drive ID.
- [`get_file_metadata`](actions/get_file_metadata.md) — Get metadata for a Drive file by ID, including mime type, parents, ownership, and trash state.
- [`get_permission`](actions/get_permission.md) — Get a specific permission on a Drive file or shared drive by permission ID.
- [`get_permission_id_for_email`](actions/get_permission_id_for_email.md) — Look up the Drive permission ID for an email address.
- [`get_reply`](actions/get_reply.md) — Get a specific reply under a Drive file comment.
- [`get_revision`](actions/get_revision.md) — Get metadata for a specific Drive file revision.
- [`get_team_drive`](actions/get_team_drive.md) — Legacy compatibility alias of `get_drive` for Team Drives.
- [`google_drive_delete_folder_or_file_action`](actions/google_drive_delete_folder_or_file_action.md) — Permanently delete a Drive file or folder by ID.
- [`hide_drive`](actions/hide_drive.md) — Hide a shared drive from the default Drive view.
- [`list_access_proposals`](actions/list_access_proposals.md) — List pending access proposals for a specific Drive file.
- [`list_approvals`](actions/list_approvals.md) — List approvals associated with a specific Drive file.
- [`list_changes`](actions/list_changes.md) — List file and drive changes for incremental sync workflows.
- [`list_comments`](actions/list_comments.md) — List comments on a Drive file with pagination.
- [`list_file_labels`](actions/list_file_labels.md) — List the Drive labels currently applied to a file.
- [`list_permissions`](actions/list_permissions.md) — List permissions on a Drive file or shared drive.
- [`list_replies`](actions/list_replies.md) — List replies under a Drive file comment with pagination.
- [`list_revisions`](actions/list_revisions.md) — List revision metadata for a Drive file.
- [`list_shared_drives`](actions/list_shared_drives.md) — List shared drives accessible to the connected account.
- [`list_team_drives`](actions/list_team_drives.md) — Legacy compatibility alias of `list_shared_drives` for Team Drives.
- [`modify_file_labels`](actions/modify_file_labels.md) — Add, update, or remove Drive labels on a file.
- [`move_file`](actions/move_file.md) — Move or rename a Drive file by updating parents and/or name.
- [`parse_file`](actions/parse_file.md) — Compatibility alias of `download_file`, including export behavior when `mimeType` is provided.
- [`patch_permission`](actions/patch_permission.md) — Patch specific fields on an existing Drive permission.
- [`trash_file`](actions/trash_file.md) — Move a Drive file or folder to trash without permanently deleting it.
- [`unhide_drive`](actions/unhide_drive.md) — Unhide a shared drive and restore it to the default Drive view.
- [`untrash_file`](actions/untrash_file.md) — Restore a Drive file or folder from trash.
- [`update_comment`](actions/update_comment.md) — Update the content of an existing Drive file comment.
- [`update_drive`](actions/update_drive.md) — Update metadata or restrictions on a shared drive.
- [`update_file_metadata_patch`](actions/update_file_metadata_patch.md) — Update Drive file metadata fields with patch semantics.
- [`update_file_put`](actions/update_file_put.md) — Update a Drive file with metadata and optional uploaded content.
- [`update_file_revision_metadata`](actions/update_file_revision_metadata.md) — Update revision metadata flags such as publish or keep-forever on a specific Drive file revision.
- [`update_permission`](actions/update_permission.md) — Update an existing Drive permission using structured permission fields.
- [`update_reply`](actions/update_reply.md) — Update the content of an existing reply on a Drive file comment.
- [`update_team_drive`](actions/update_team_drive.md) — Legacy compatibility alias of `update_drive` for Team Drives.
- [`upload_file`](actions/upload_file.md) — Upload a new Drive file with binary or text content and optional metadata.
- [`upload_update_file`](actions/upload_update_file.md) — Replace the content of an existing Drive file and optionally update metadata.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Drive state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Drive is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googledrive
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Drive homepage: https://workspace.google.com/products/drive/
