---
name: jira
description: "Jira (atlassian.com). Use this skill for ANY Jira request — reading, creating, and updating data. Whenever a task involves Jira, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Jira"
  author: "OOMOL"
  version: "1.0.0"
  service: "jira"
  categories: "Productivity, Developer Tools"
  homepage: "https://www.atlassian.com/software/jira"
  icon: "https://static.oomol.com/logo/third-party/Jira.svg"
---

# Jira

Operate **Jira** through your OOMOL-connected account. This skill calls the `jira` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Developer Tools. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Jira. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "jira" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "jira" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_comment`](actions/add_comment.md) — Add a comment to one Jira issue.
- [`create_issue`](actions/create_issue.md) — Create a Jira issue and return the normalized issue detail.
- [`get_issue`](actions/get_issue.md) — Get one Jira issue by issue ID or key.
- [`get_project`](actions/get_project.md) — Get one Jira project by project ID or key.
- [`list_issue_comments`](actions/list_issue_comments.md) — List comments for one Jira issue.
- [`list_projects`](actions/list_projects.md) — List Jira projects available to the connected Jira site.
- [`search_issues`](actions/search_issues.md) — Search Jira issues with JQL on the connected Jira site.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Jira state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Jira is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=jira
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Jira homepage: https://www.atlassian.com/software/jira
