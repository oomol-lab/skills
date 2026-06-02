---
name: oo-github
description: "GitHub (github.com). Use this skill for ANY GitHub request — reading, creating, updating, and deleting data. Whenever a task involves GitHub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "GitHub"
  author: "OOMOL"
  version: "1.0.0"
  service: "github"
  categories: "Developer Tools"
  homepage: "https://github.com"
  icon: "https://static.oomol.com/logo/third-party/github.png"
---

# GitHub

Operate **GitHub** through your OOMOL-connected account. This skill calls the `github` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 81 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected GitHub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "github" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "github" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_issue_assignees`](actions/add_issue_assignees.md) — Add assignees to a GitHub issue.
- [`add_issue_labels`](actions/add_issue_labels.md) — Add labels to a GitHub issue.
- [`check_pull_request_merged`](actions/check_pull_request_merged.md) — Check whether a GitHub pull request has been merged.
- [`clear_issue_labels`](actions/clear_issue_labels.md) — Remove all labels from a GitHub issue.
- [`compare_commits`](actions/compare_commits.md) — Compare two commit references in a GitHub repository.
- [`create_commit_status`](actions/create_commit_status.md) — Create a commit status for a GitHub commit SHA.
- [`create_issue`](actions/create_issue.md) — Create an issue in a GitHub repository.
- [`create_issue_comment`](actions/create_issue_comment.md) — Create a comment on a GitHub issue.
- [`create_or_update_file`](actions/create_or_update_file.md) — Create or update a repository file through the GitHub contents API. Writing under .github/workflows may require GitHub workflow scope.
- [`create_pull_request`](actions/create_pull_request.md) — Create a pull request in a GitHub repository.
- [`create_pull_request_review`](actions/create_pull_request_review.md) — Create a review for a GitHub pull request, optionally with inline comments.
- [`create_pull_request_review_comment`](actions/create_pull_request_review_comment.md) — Create a review comment on a GitHub pull request diff.
- [`delete_file`](actions/delete_file.md) — Delete a repository file through the GitHub contents API. Deleting under .github/workflows may require GitHub workflow scope.
- [`get_branch`](actions/get_branch.md) — Get a GitHub branch by name.
- [`get_commit`](actions/get_commit.md) — Get a commit by SHA in a GitHub repository.
- [`get_commit_statuses`](actions/get_commit_statuses.md) — List statuses for a commit reference in reverse chronological order.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated GitHub user profile.
- [`get_file_contents`](actions/get_file_contents.md) — Read a repository file and return both base64 and decoded text when available.
- [`get_issue`](actions/get_issue.md) — Get a GitHub issue by number.
- [`get_latest_release`](actions/get_latest_release.md) — Get the latest published release for a GitHub repository.
- [`get_pull_request`](actions/get_pull_request.md) — Get a GitHub pull request by number.
- [`get_release`](actions/get_release.md) — Get a GitHub release by numeric id.
- [`get_release_by_tag`](actions/get_release_by_tag.md) — Get a GitHub release by tag name.
- [`get_repository`](actions/get_repository.md) — Get metadata for a GitHub repository by owner and name.
- [`get_workflow_run`](actions/get_workflow_run.md) — Get a GitHub workflow run by id.
- [`list_authenticated_user_events`](actions/list_authenticated_user_events.md) — List activity events for a GitHub user and include private events when the authenticated credential belongs to that user.
- [`list_authenticated_user_received_events`](actions/list_authenticated_user_received_events.md) — List received activity events for a GitHub user and include private events when the authenticated credential belongs to that user.
- [`list_branches`](actions/list_branches.md) — List branches in a GitHub repository.
- [`list_check_runs_for_ref`](actions/list_check_runs_for_ref.md) — List GitHub check runs for a commit SHA, branch, or tag.
- [`list_commits`](actions/list_commits.md) — List commits in a GitHub repository with optional branch, path, author, and date filters.
- [`list_directory_contents`](actions/list_directory_contents.md) — List entries under a repository directory path. Empty path means repository root.
- [`list_issue_comments`](actions/list_issue_comments.md) — List comments under a GitHub issue.
- [`list_issue_events`](actions/list_issue_events.md) — List events for a GitHub issue.
- [`list_issue_labels`](actions/list_issue_labels.md) — List labels applied to a GitHub issue.
- [`list_issue_timeline_events`](actions/list_issue_timeline_events.md) — List timeline events for a GitHub issue.
- [`list_my_repositories`](actions/list_my_repositories.md) — List repositories visible to the authenticated GitHub user.
- [`list_public_events`](actions/list_public_events.md) — List the global public GitHub event feed.
- [`list_pull_request_commits`](actions/list_pull_request_commits.md) — List commits on a GitHub pull request.
- [`list_pull_request_files`](actions/list_pull_request_files.md) — List files changed in a GitHub pull request.
- [`list_pull_request_requested_reviewers`](actions/list_pull_request_requested_reviewers.md) — List requested reviewers on a GitHub pull request.
- [`list_pull_request_review_comments`](actions/list_pull_request_review_comments.md) — List review comments on a GitHub pull request.
- [`list_pull_request_reviews`](actions/list_pull_request_reviews.md) — List reviews for a GitHub pull request.
- [`list_pull_requests`](actions/list_pull_requests.md) — List pull requests for a GitHub repository.
- [`list_pull_requests_associated_with_commit`](actions/list_pull_requests_associated_with_commit.md) — List pull requests associated with a commit SHA.
- [`list_release_assets`](actions/list_release_assets.md) — List assets attached to a GitHub release.
- [`list_releases`](actions/list_releases.md) — List releases for a GitHub repository.
- [`list_repository_events`](actions/list_repository_events.md) — List recent GitHub events for a repository.
- [`list_repository_issue_events`](actions/list_repository_issue_events.md) — List issue events across a GitHub repository.
- [`list_repository_issues`](actions/list_repository_issues.md) — List issues for a GitHub repository. Pull requests are filtered out from the response.
- [`list_repository_labels`](actions/list_repository_labels.md) — List labels available in a GitHub repository.
- [`list_repository_workflows`](actions/list_repository_workflows.md) — List workflows configured in a GitHub repository.
- [`list_user_public_events`](actions/list_user_public_events.md) — List public GitHub events performed by a user.
- [`list_user_received_public_events`](actions/list_user_received_public_events.md) — List public GitHub events received by a user.
- [`list_workflow_run_jobs`](actions/list_workflow_run_jobs.md) — List jobs for a GitHub workflow run.
- [`list_workflow_runs`](actions/list_workflow_runs.md) — List GitHub workflow runs for a repository.
- [`lock_issue`](actions/lock_issue.md) — Lock a GitHub issue conversation.
- [`merge_branch`](actions/merge_branch.md) — Merge one branch into another in a GitHub repository.
- [`merge_pull_request`](actions/merge_pull_request.md) — Merge a GitHub pull request.
- [`remove_issue_assignees`](actions/remove_issue_assignees.md) — Remove assignees from a GitHub issue.
- [`remove_issue_label`](actions/remove_issue_label.md) — Remove one label from a GitHub issue.
- [`remove_pull_request_reviewers`](actions/remove_pull_request_reviewers.md) — Remove requested reviewers from a GitHub pull request.
- [`rename_branch`](actions/rename_branch.md) — Rename a branch in a GitHub repository.
- [`reply_pull_request_review_comment`](actions/reply_pull_request_review_comment.md) — Reply to a top-level GitHub pull request review comment.
- [`request_pull_request_reviewers`](actions/request_pull_request_reviewers.md) — Request reviewers on a GitHub pull request.
- [`rerequest_check_run`](actions/rerequest_check_run.md) — Re-request a GitHub check run.
- [`rerequest_check_suite`](actions/rerequest_check_suite.md) — Re-request a GitHub check suite.
- [`rerun_workflow`](actions/rerun_workflow.md) — Re-run a GitHub Actions workflow run.
- [`search_code`](actions/search_code.md) — Search GitHub code with GitHub search syntax.
- [`search_commits`](actions/search_commits.md) — Search GitHub commits by commit-message text and qualifiers.
- [`search_issues_and_pull_requests`](actions/search_issues_and_pull_requests.md) — Search GitHub issues and pull requests with raw GitHub search syntax or structured filters close to Composio pull-request search.
- [`search_labels`](actions/search_labels.md) — Search labels within a GitHub repository by repository id and query.
- [`search_repositories`](actions/search_repositories.md) — Search GitHub repositories with GitHub search syntax.
- [`search_topics`](actions/search_topics.md) — Search GitHub topics with GitHub search syntax.
- [`search_users`](actions/search_users.md) — Search GitHub users with GitHub search syntax.
- [`set_issue_labels`](actions/set_issue_labels.md) — Replace all labels on a GitHub issue.
- [`submit_pull_request_review`](actions/submit_pull_request_review.md) — Submit a pending GitHub pull request review.
- [`sync_fork_branch_with_upstream`](actions/sync_fork_branch_with_upstream.md) — Sync a fork branch with its upstream branch.
- [`unlock_issue`](actions/unlock_issue.md) — Unlock a GitHub issue conversation.
- [`update_issue`](actions/update_issue.md) — Update a GitHub issue by number.
- [`update_pull_request`](actions/update_pull_request.md) — Update a GitHub pull request title, body, state, base branch, or maintainer-can-modify flag.
- [`update_pull_request_branch`](actions/update_pull_request_branch.md) — Update a GitHub pull request branch with the latest base branch changes.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change GitHub state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — GitHub is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=github
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- GitHub homepage: https://github.com
