---
name: clickup
description: "ClickUp (clickup.com). Use this skill for ANY ClickUp request — reading, creating, updating, and deleting data. Whenever a task involves ClickUp, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ClickUp"
  author: "OOMOL"
  version: "1.0.0"
  service: "clickup"
  categories: "Productivity"
  homepage: "https://clickup.com"
  icon: "https://static.oomol.com/logo/third-party/ClickUp.svg"
---

# ClickUp

Operate **ClickUp** through your OOMOL-connected account. This skill calls the `clickup` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 68 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ClickUp. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "clickup" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "clickup" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_dependency`](actions/add_dependency.md) — Add a ClickUp dependency relationship to a task.
- [`add_tag_to_task`](actions/add_tag_to_task.md) — Add a ClickUp tag to a task.
- [`add_task_link`](actions/add_task_link.md) — Add a ClickUp task link to a task.
- [`add_task_to_list`](actions/add_task_to_list.md) — Add a ClickUp task to an additional list.
- [`create_checklist`](actions/create_checklist.md) — Create a checklist on a ClickUp task.
- [`create_checklist_item`](actions/create_checklist_item.md) — Create a checklist item on a ClickUp checklist.
- [`create_folder`](actions/create_folder.md) — Create a ClickUp folder in a space.
- [`create_folderless_list`](actions/create_folderless_list.md) — Create a ClickUp folderless list in a space.
- [`create_list`](actions/create_list.md) — Create a ClickUp list in a folder.
- [`create_list_from_template`](actions/create_list_from_template.md) — Create a ClickUp list from a folder list template.
- [`create_space`](actions/create_space.md) — Create a ClickUp space in a workspace.
- [`create_task`](actions/create_task.md) — Create a ClickUp task in a list with optional scheduling and assignee fields.
- [`create_task_attachment`](actions/create_task_attachment.md) — Upload an attachment file to a ClickUp task.
- [`create_task_comment`](actions/create_task_comment.md) — Create a comment on a ClickUp task.
- [`create_task_from_template`](actions/create_task_from_template.md) — Create a ClickUp task from a task template.
- [`create_threaded_comment`](actions/create_threaded_comment.md) — Create a threaded reply on a ClickUp comment.
- [`delete_checklist`](actions/delete_checklist.md) — Delete a ClickUp checklist by checklist ID.
- [`delete_checklist_item`](actions/delete_checklist_item.md) — Delete a ClickUp checklist item by checklist item ID.
- [`delete_comment`](actions/delete_comment.md) — Delete a ClickUp comment by comment ID.
- [`delete_dependency`](actions/delete_dependency.md) — Delete a ClickUp dependency relationship from a task.
- [`delete_folder`](actions/delete_folder.md) — Delete a ClickUp folder by folder ID.
- [`delete_list`](actions/delete_list.md) — Delete a ClickUp list by list ID.
- [`delete_space`](actions/delete_space.md) — Delete a ClickUp space by space ID.
- [`delete_task`](actions/delete_task.md) — Delete a ClickUp task by task ID.
- [`delete_task_link`](actions/delete_task_link.md) — Delete a ClickUp task link from a task.
- [`get_current_user`](actions/get_current_user.md) — Get the authenticated ClickUp user profile.
- [`get_custom_task_types`](actions/get_custom_task_types.md) — Get the ClickUp custom task types available on a workspace.
- [`get_folder`](actions/get_folder.md) — Get a ClickUp folder by folder ID.
- [`get_folder_custom_fields`](actions/get_folder_custom_fields.md) — Get the ClickUp custom fields available on a folder.
- [`get_folder_views`](actions/get_folder_views.md) — Get the ClickUp views available on a folder.
- [`get_list`](actions/get_list.md) — Get a ClickUp list by list ID.
- [`get_list_custom_fields`](actions/get_list_custom_fields.md) — Get the ClickUp custom fields available on a list.
- [`get_list_members`](actions/get_list_members.md) — Get the ClickUp members with explicit access to a list.
- [`get_list_views`](actions/get_list_views.md) — Get the ClickUp views available on a list.
- [`get_space`](actions/get_space.md) — Get a ClickUp space by space ID.
- [`get_space_custom_fields`](actions/get_space_custom_fields.md) — Get the ClickUp custom fields available on a space.
- [`get_space_tags`](actions/get_space_tags.md) — Get the ClickUp tags available on a space.
- [`get_space_views`](actions/get_space_views.md) — Get the ClickUp views available on a space.
- [`get_task`](actions/get_task.md) — Get a ClickUp task by task ID.
- [`get_task_comments`](actions/get_task_comments.md) — Get the comments on a ClickUp task.
- [`get_task_members`](actions/get_task_members.md) — Get the ClickUp members with explicit access to a task.
- [`get_task_templates`](actions/get_task_templates.md) — Get the ClickUp task templates available in a workspace.
- [`get_threaded_comments`](actions/get_threaded_comments.md) — Get the threaded replies on a ClickUp comment.
- [`get_user`](actions/get_user.md) — Get a ClickUp workspace user by user ID.
- [`get_view`](actions/get_view.md) — Get a ClickUp view by view ID.
- [`get_view_tasks`](actions/get_view_tasks.md) — Get the visible ClickUp tasks in a view.
- [`get_workspace_custom_fields`](actions/get_workspace_custom_fields.md) — Get the ClickUp custom fields available on a workspace.
- [`get_workspace_everything_level_views`](actions/get_workspace_everything_level_views.md) — Get the ClickUp everything-level views available on a workspace.
- [`list_folderless_lists`](actions/list_folderless_lists.md) — List the ClickUp folderless lists available in a space.
- [`list_folders`](actions/list_folders.md) — List the ClickUp folders available in a space.
- [`list_list_tasks`](actions/list_list_tasks.md) — List the ClickUp tasks in a list with optional filters.
- [`list_lists`](actions/list_lists.md) — List the ClickUp lists available in a folder.
- [`list_spaces`](actions/list_spaces.md) — List the ClickUp spaces available in a workspace.
- [`list_workspace_tasks`](actions/list_workspace_tasks.md) — List the ClickUp tasks in a workspace with official filter parameters.
- [`list_workspace_users`](actions/list_workspace_users.md) — List the members visible on a ClickUp workspace.
- [`list_workspaces`](actions/list_workspaces.md) — List the ClickUp workspaces available to the authenticated user.
- [`move_task_to_home_list`](actions/move_task_to_home_list.md) — Move a ClickUp task to a new home list.
- [`remove_custom_field_value`](actions/remove_custom_field_value.md) — Remove a ClickUp custom field value from a task.
- [`remove_tag_from_task`](actions/remove_tag_from_task.md) — Remove a ClickUp tag from a task.
- [`remove_task_from_list`](actions/remove_task_from_list.md) — Remove a ClickUp task from an additional list.
- [`set_custom_field_value`](actions/set_custom_field_value.md) — Set a ClickUp custom field value on a task.
- [`update_checklist`](actions/update_checklist.md) — Update a ClickUp checklist by checklist ID.
- [`update_checklist_item`](actions/update_checklist_item.md) — Update a ClickUp checklist item by checklist item ID.
- [`update_comment`](actions/update_comment.md) — Update a ClickUp comment by comment ID.
- [`update_folder`](actions/update_folder.md) — Update a ClickUp folder by folder ID.
- [`update_list`](actions/update_list.md) — Update a ClickUp list by list ID.
- [`update_space`](actions/update_space.md) — Update a ClickUp space by space ID.
- [`update_task`](actions/update_task.md) — Update a ClickUp task by task ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ClickUp state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ClickUp is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=clickup
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ClickUp homepage: https://clickup.com
