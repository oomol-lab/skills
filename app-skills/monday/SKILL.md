---
name: monday
description: "Monday (monday.com). Use this skill for ANY Monday request — reading, creating, updating, and deleting data. Whenever a task involves Monday, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Monday"
  author: "OOMOL"
  version: "1.0.0"
  service: "monday"
  categories: "Productivity"
  homepage: "https://monday.com"
  icon: "https://static.oomol.com/logo/third-party/Monday.svg"
---

# Monday

Operate **Monday** through your OOMOL-connected account. This skill calls the `monday` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 64 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Monday. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "monday" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "monday" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`activate_form`](actions/activate_form.md) — Activate a Monday Workform so it starts accepting submissions.
- [`add_teams_to_board`](actions/add_teams_to_board.md) — Add Monday teams to a board as subscribers or owners.
- [`add_users_to_board`](actions/add_users_to_board.md) — Add Monday users to a board as subscribers or owners.
- [`archive_board`](actions/archive_board.md) — Archive a Monday board.
- [`archive_item`](actions/archive_item.md) — Archive a Monday item.
- [`assign_department_members`](actions/assign_department_members.md) — Assign users to a Monday department on an enterprise account.
- [`change_item_position`](actions/change_item_position.md) — Change a Monday item's position on the same board.
- [`change_multiple_column_values`](actions/change_multiple_column_values.md) — Change multiple Monday column values in one mutation using the official JSON payload shape.
- [`change_simple_column_value`](actions/change_simple_column_value.md) — Change a Monday column value using the official simple string mutation.
- [`clear_users_department`](actions/clear_users_department.md) — Clear department assignments from Monday users on an enterprise account.
- [`create_board`](actions/create_board.md) — Create a Monday board with the official create_board mutation.
- [`create_column`](actions/create_column.md) — Create a Monday column on an existing board.
- [`create_dashboard`](actions/create_dashboard.md) — Create a Monday dashboard with the official dashboard mutation.
- [`create_department`](actions/create_department.md) — Create a Monday department on an enterprise account.
- [`create_doc`](actions/create_doc.md) — Create a Monday doc in a workspace or document column location.
- [`create_form`](actions/create_form.md) — Create a Monday Workform and its destination responses board.
- [`create_group`](actions/create_group.md) — Create a Monday group on an existing board.
- [`create_item`](actions/create_item.md) — Create a Monday item on a board, optionally setting column values and position.
- [`create_subitem`](actions/create_subitem.md) — Create a Monday subitem under an existing parent item.
- [`create_update`](actions/create_update.md) — Create a Monday update on an item or as a reply to an existing update.
- [`deactivate_form`](actions/deactivate_form.md) — Deactivate a Monday Workform so it stops accepting submissions.
- [`delete_board`](actions/delete_board.md) — Delete a Monday board.
- [`delete_column`](actions/delete_column.md) — Delete a Monday column from an existing board.
- [`delete_dashboard`](actions/delete_dashboard.md) — Delete a Monday dashboard.
- [`delete_department`](actions/delete_department.md) — Delete a Monday department on an enterprise account.
- [`delete_doc`](actions/delete_doc.md) — Delete an existing Monday doc.
- [`delete_group`](actions/delete_group.md) — Delete a Monday group from an existing board.
- [`delete_item`](actions/delete_item.md) — Delete a Monday item.
- [`delete_subscribers_from_board`](actions/delete_subscribers_from_board.md) — Remove Monday user subscribers from a board.
- [`delete_teams_from_board`](actions/delete_teams_from_board.md) — Remove Monday team subscribers from a board.
- [`delete_update`](actions/delete_update.md) — Delete an existing Monday update.
- [`duplicate_item`](actions/duplicate_item.md) — Duplicate a Monday item.
- [`edit_update`](actions/edit_update.md) — Edit an existing Monday update.
- [`find_items_by_column_values`](actions/find_items_by_column_values.md) — Find Monday items on a board by matching explicit column values.
- [`get_board_memberships`](actions/get_board_memberships.md) — Retrieve the user and team memberships configured on a Monday board.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the Monday user associated with the current personal API token.
- [`get_form`](actions/get_form.md) — Retrieve a Monday Workform by its unique form token.
- [`get_items`](actions/get_items.md) — Retrieve specific Monday items by ID.
- [`get_items_page`](actions/get_items_page.md) — Retrieve a filtered page of Monday board items using the official items_page query.
- [`get_next_items_page`](actions/get_next_items_page.md) — Retrieve the next page of Monday items from an items_page cursor.
- [`list_activity_logs`](actions/list_activity_logs.md) — List board-scoped Monday activity logs.
- [`list_assets`](actions/list_assets.md) — Retrieve one or more Monday assets by asset ID.
- [`list_audit_logs`](actions/list_audit_logs.md) — List account-level Monday audit logs on enterprise accounts.
- [`list_board_columns`](actions/list_board_columns.md) — List the columns for a specific Monday board.
- [`list_boards`](actions/list_boards.md) — List Monday boards with official pagination and board-level filters.
- [`list_departments`](actions/list_departments.md) — List Monday departments on enterprise accounts.
- [`list_docs`](actions/list_docs.md) — List Monday docs by document, object, or workspace identifiers.
- [`list_groups`](actions/list_groups.md) — List the groups for a specific Monday board.
- [`list_subitems_by_parent`](actions/list_subitems_by_parent.md) — List Monday subitems for one or more parent items.
- [`list_team_members`](actions/list_team_members.md) — List the members of a specific Monday team.
- [`list_teams`](actions/list_teams.md) — List Monday teams with official filters and pagination.
- [`list_update_replies`](actions/list_update_replies.md) — List Monday replies for updates on one or more boards.
- [`list_updates`](actions/list_updates.md) — List Monday updates with optional date filtering.
- [`list_users`](actions/list_users.md) — List Monday users with official root-level filters and pagination.
- [`list_workspaces`](actions/list_workspaces.md) — List Monday workspaces with official filters and pagination.
- [`move_item_to_board`](actions/move_item_to_board.md) — Move a Monday item to another board and target group.
- [`move_item_to_group`](actions/move_item_to_group.md) — Move a Monday item to another group on the same board.
- [`set_item_description_content`](actions/set_item_description_content.md) — Replace a Monday item description using markdown content.
- [`update_board`](actions/update_board.md) — Update a Monday board attribute with the official update_board mutation.
- [`update_column`](actions/update_column.md) — Update a Monday column with the official update_column mutation.
- [`update_dashboard`](actions/update_dashboard.md) — Update a Monday dashboard with the official dashboard mutation.
- [`update_department`](actions/update_department.md) — Update a Monday department on an enterprise account.
- [`update_doc_name`](actions/update_doc_name.md) — Update the name of an existing Monday doc.
- [`update_group`](actions/update_group.md) — Update an existing Monday group attribute.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Monday state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Monday is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=monday
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Monday homepage: https://monday.com
