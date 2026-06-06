---
name: oo-googledrive
description: "Google Drive (workspace.google.com). Use this skill for ANY Google Drive request — reading, creating, updating, and deleting data. Whenever a task involves Google Drive, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Drive"
  author: "OOMOL"
  version: "1.0.2"
  service: "googledrive"
  categories: "Storage, Productivity"
  homepage: "https://workspace.google.com/products/drive/"
  icon: "https://static.oomol.com/logo/third-party/Google%20Drive.svg"
---

# Google Drive

Operate **Google Drive** through your OOMOL-connected account. This skill calls the `googledrive` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Productivity. Exposes 43 action(s).

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

- [`about.get`](actions/about-get.md) — Get Drive account information such as user details, quota, and supported capabilities.
- [`accessproposals.list`](actions/accessproposals-list.md) — List pending access proposals for a specific Drive file.
- [`approvals.list`](actions/approvals-list.md) — List approvals associated with a specific Drive file.
- [`apps.get`](actions/apps-get.md) — Get metadata for a specific Google Drive app by app ID.
- [`changes.getStartPageToken`](actions/changes-getstartpagetoken.md) — Get the page token for monitoring future Drive changes.
- [`changes.list`](actions/changes-list.md) — List file and drive changes for incremental sync workflows.
- [`comments.create`](actions/comments-create.md) — Create a comment on a Drive file, optionally with anchor or quoted file content.
- [`comments.delete`](actions/comments-delete.md) — Permanently delete a comment thread from a Drive file.
- [`comments.get`](actions/comments-get.md) — Get a specific comment on a Drive file by comment ID.
- [`comments.list`](actions/comments-list.md) — List comments on a Drive file with pagination.
- [`comments.update`](actions/comments-update.md) — Update the content of an existing Drive file comment.
- [`drives.create`](actions/drives-create.md) — Create a new shared drive.
- [`drives.delete`](actions/drives-delete.md) — Permanently delete a shared drive.
- [`drives.get`](actions/drives-get.md) — Get a shared drive by drive ID.
- [`drives.hide`](actions/drives-hide.md) — Hide a shared drive from the default Drive view.
- [`drives.list`](actions/drives-list.md) — List shared drives accessible to the connected account.
- [`drives.unhide`](actions/drives-unhide.md) — Unhide a shared drive and restore it to the default Drive view.
- [`drives.update`](actions/drives-update.md) — Update metadata or restrictions on a shared drive.
- [`files.copy`](actions/files-copy.md) — Copy a Drive file and optionally override official File metadata.
- [`files.create`](actions/files-create.md) — Create a Drive file with official File metadata and optional connector media upload content.
- [`files.delete`](actions/files-delete.md) — Permanently delete a Drive file or folder by ID.
- [`files.emptyTrash`](actions/files-emptytrash.md) — Permanently empty the user's trash or a shared drive's trash.
- [`files.export`](actions/files-export.md) — Export a Google Workspace file to the requested MIME type and return a transit URL for the exported content.
- [`files.generateIds`](actions/files-generateids.md) — Generate one or more Drive file IDs for later create or copy requests.
- [`files.get`](actions/files-get.md) — Get metadata for a Drive file by ID.
- [`files.list`](actions/files-list.md) — List Google Drive files using the official Drive query and pagination parameters.
- [`files.listLabels`](actions/files-listlabels.md) — List the Drive labels currently applied to a file.
- [`files.modifyLabels`](actions/files-modifylabels.md) — Add, update, or remove Drive labels on a file.
- [`files.update`](actions/files-update.md) — Patch a Drive file with official metadata, parent query parameters, and optional connector media upload content.
- [`permissions.create`](actions/permissions-create.md) — Create a permission on a Drive file or shared drive.
- [`permissions.delete`](actions/permissions-delete.md) — Delete a permission from a Drive file or shared drive.
- [`permissions.get`](actions/permissions-get.md) — Get a specific permission on a Drive file or shared drive by permission ID.
- [`permissions.list`](actions/permissions-list.md) — List permissions on a Drive file or shared drive.
- [`permissions.update`](actions/permissions-update.md) — Update an existing Drive permission using Google Drive v3 patch semantics.
- [`replies.create`](actions/replies-create.md) — Create a reply under an existing Drive file comment.
- [`replies.delete`](actions/replies-delete.md) — Permanently delete a specific reply from a Drive file comment thread.
- [`replies.get`](actions/replies-get.md) — Get a specific reply under a Drive file comment.
- [`replies.list`](actions/replies-list.md) — List replies under a Drive file comment with pagination.
- [`replies.update`](actions/replies-update.md) — Update the content of an existing reply on a Drive file comment.
- [`revisions.delete`](actions/revisions-delete.md) — Permanently delete a specific revision from a Drive file.
- [`revisions.get`](actions/revisions-get.md) — Get metadata for a specific Drive file revision.
- [`revisions.list`](actions/revisions-list.md) — List revision metadata for a Drive file.
- [`revisions.update`](actions/revisions-update.md) — Update revision metadata flags on a specific Drive file revision.

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
