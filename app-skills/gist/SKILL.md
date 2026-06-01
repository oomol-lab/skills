---
name: gist
description: "Gist (gist.github.com). Use this skill for ANY Gist request — reading, creating, updating, and deleting data. Whenever a task involves Gist, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Gist"
  author: "OOMOL"
  version: "1.0.0"
  service: "gist"
  categories: "Developer Tools"
  homepage: "https://gist.github.com"
  icon: "https://static.oomol.com/logo/third-party/github.png"
---

# Gist

Operate **Gist** through your OOMOL-connected account. This skill calls the `gist` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 20 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Gist. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "gist" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "gist" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`check_gist_starred`](actions/check_gist_starred.md) — Check whether the authenticated GitHub user has starred a gist.
- [`create_gist`](actions/create_gist.md) — Create a new GitHub gist.
- [`create_gist_comment`](actions/create_gist_comment.md) — Create a comment on a GitHub gist.
- [`delete_gist`](actions/delete_gist.md) — Delete a GitHub gist.
- [`delete_gist_comment`](actions/delete_gist_comment.md) — Delete a GitHub gist comment.
- [`fork_gist`](actions/fork_gist.md) — Fork a GitHub gist.
- [`get_gist`](actions/get_gist.md) — Get a GitHub gist by id.
- [`get_gist_comment`](actions/get_gist_comment.md) — Get a GitHub gist comment by id.
- [`get_gist_revision`](actions/get_gist_revision.md) — Get a specific revision of a GitHub gist.
- [`list_gist_comments`](actions/list_gist_comments.md) — List comments for a GitHub gist.
- [`list_gist_commits`](actions/list_gist_commits.md) — List commit history for a GitHub gist.
- [`list_gist_forks`](actions/list_gist_forks.md) — List forks for a GitHub gist.
- [`list_my_gists`](actions/list_my_gists.md) — List gists visible to the authenticated GitHub user.
- [`list_public_gists`](actions/list_public_gists.md) — List recent public GitHub gists.
- [`list_starred_gists`](actions/list_starred_gists.md) — List gists starred by the authenticated GitHub user.
- [`list_user_gists`](actions/list_user_gists.md) — List public gists for a GitHub user.
- [`star_gist`](actions/star_gist.md) — Star a GitHub gist.
- [`unstar_gist`](actions/unstar_gist.md) — Unstar a GitHub gist.
- [`update_gist`](actions/update_gist.md) — Update a GitHub gist description or files.
- [`update_gist_comment`](actions/update_gist_comment.md) — Update a GitHub gist comment.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Gist state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Gist is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=gist
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Gist homepage: https://gist.github.com
