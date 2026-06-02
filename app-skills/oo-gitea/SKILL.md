---
name: oo-gitea
description: "Gitea (about.gitea.com). Use this skill for ANY Gitea request — reading, creating, and updating data. Whenever a task involves Gitea, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Gitea"
  author: "OOMOL"
  version: "1.0.0"
  service: "gitea"
  categories: "Developer Tools"
  homepage: "https://about.gitea.com/products/gitea/"
  icon: "https://static.oomol.com/logo/third-party/Gitea.svg"
---

# Gitea

Operate **Gitea** through your OOMOL-connected account. This skill calls the `gitea` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Gitea. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gitea" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gitea" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_issue`](actions/create_issue.md) — Create an issue in a Gitea repository.
- [`create_issue_comment`](actions/create_issue_comment.md) — Create a comment on a Gitea issue.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated Gitea user profile.
- [`get_issue`](actions/get_issue.md) — Get a Gitea issue by repository and issue number.
- [`get_repository`](actions/get_repository.md) — Get metadata for a Gitea repository by owner and name.
- [`list_issue_comments`](actions/list_issue_comments.md) — List comments under a Gitea issue.
- [`list_my_repositories`](actions/list_my_repositories.md) — List repositories owned by the authenticated Gitea user.
- [`list_repository_issues`](actions/list_repository_issues.md) — List issues in a Gitea repository. Pull requests are filtered out.
- [`search_repositories`](actions/search_repositories.md) — Search Gitea repositories by keyword with optional repository filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Gitea state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Gitea is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gitea
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Gitea homepage: https://about.gitea.com/products/gitea/
