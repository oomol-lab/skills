---
name: oo-linear
description: "Linear (linear.app). Use this skill for ANY Linear request — reading, creating, updating, and deleting data. Whenever a task involves Linear, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Linear"
  author: "OOMOL"
  version: "1.0.0"
  service: "linear"
  categories: "Productivity, Developer Tools"
  homepage: "https://linear.app"
  icon: "https://static.oomol.com/logo/third-party/Linear.svg"
---

# Linear

Operate **Linear** through your OOMOL-connected account. This skill calls the `linear` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Developer Tools. Exposes 34 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Linear. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "linear" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "linear" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_attachment`](actions/create_attachment.md) — Create or update an attachment for the specified Linear issue.
- [`create_comment_reaction`](actions/create_comment_reaction.md) — Creates an emoji reaction for the specified Linear comment.
- [`create_linear_comment`](actions/create_linear_comment.md) — Creates a comment for the specified Linear issue.
- [`create_linear_issue`](actions/create_linear_issue.md) — Create a new Linear issue in the specified team and support fields such as project, person in charge, status, label, etc.
- [`create_linear_issue_relation`](actions/create_linear_issue_relation.md) — Create a relationship between two Linear issues, such as blocks, related, or duplicate.
- [`create_linear_label`](actions/create_linear_label.md) — Creates a new Linear issue label in the specified team.
- [`create_linear_project`](actions/create_linear_project.md) — Create a new Linear project and associate one or more teams.
- [`create_project_milestone`](actions/create_project_milestone.md) — Creates a project milestone for the specified Linear project.
- [`create_project_update`](actions/create_project_update.md) — Creates a project progress update for the specified Linear project.
- [`delete_linear_issue`](actions/delete_linear_issue.md) — Delete the specified Linear issue.
- [`get_all_linear_teams`](actions/get_all_linear_teams.md) — Lists all Linear team basic information accessible with the current credentials.
- [`get_attachment`](actions/get_attachment.md) — Retrieve a Linear attachment based on the issue and attachment ID or file name.
- [`get_current_user`](actions/get_current_user.md) — Get the currently authenticated Linear user profile.
- [`get_cycles_by_team_id`](actions/get_cycles_by_team_id.md) — Get all cycle information under the specified team.
- [`get_issue_defaults`](actions/get_issue_defaults.md) — Gets the default status and default estimate used when the specified team creates an issue.
- [`get_linear_issue`](actions/get_linear_issue.md) — Get details of a Linear issue, including comments, attachments, subscribers, and underlying relationship fields.
- [`get_linear_project`](actions/get_linear_project.md) — Get the details of a Linear project, complete with team, members, and initiatives on demand.
- [`list_issue_drafts`](actions/list_issue_drafts.md) — Lists issue drafts visible to the current user in Linear.
- [`list_issues_by_team_id`](actions/list_issues_by_team_id.md) — List Linear issues by team, and support cursor paging and whether to include archived issues.
- [`list_linear_cycles`](actions/list_linear_cycles.md) — Lists the Linear periods accessible by the current credential.
- [`list_linear_issues`](actions/list_linear_issues.md) — Lists Linear issues accessible with current credentials, and supports filtering by project and person in charge.
- [`list_linear_labels`](actions/list_linear_labels.md) — Lists Linear labels for a specified team or entire workspace.
- [`list_linear_projects`](actions/list_linear_projects.md) — Lists Linear projects accessible with the current credentials.
- [`list_linear_states`](actions/list_linear_states.md) — Lists all workflow statuses for the specified team.
- [`list_linear_teams`](actions/list_linear_teams.md) — Lists Linear teams accessible with current credentials, along with a list of members and projects.
- [`list_linear_users`](actions/list_linear_users.md) — List Linear users in the current workspace and support cursor paging.
- [`remove_issue_label`](actions/remove_issue_label.md) — Removes a label from the specified Linear issue.
- [`remove_reaction`](actions/remove_reaction.md) — Delete an existing Linear reaction.
- [`run_mutation`](actions/run_mutation.md) — Perform a mutation directly on the Linear GraphQL API.
- [`run_query`](actions/run_query.md) — Execute a read-only query directly against the Linear GraphQL API.
- [`search_issues`](actions/search_issues.md) — Retrieve issues through Linear's full-text search capabilities.
- [`update_issue`](actions/update_issue.md) — Update an existing Linear issue and support fields such as title, description, status, project, label, etc.
- [`update_linear_comment`](actions/update_linear_comment.md) — Update the text of an existing Linear comment.
- [`update_linear_project`](actions/update_linear_project.md) — Update an existing Linear project.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Linear state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Linear is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=linear
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Linear homepage: https://linear.app
