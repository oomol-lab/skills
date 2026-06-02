---
name: oo-canny
description: "Canny (canny.io). Use this skill for ANY Canny request — reading, creating, and updating data. Whenever a task involves Canny, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Canny"
  author: "OOMOL"
  version: "1.0.0"
  service: "canny"
  categories: "Productivity, Data & Analytics"
  homepage: "https://canny.io"
  icon: "https://static.oomol.com/logo/third-party/Canny.svg"
---

# Canny

Operate **Canny** through your OOMOL-connected account. This skill calls the `canny` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Canny. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "canny" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "canny" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_comment`](actions/create_comment.md) — Create a new Canny comment on a post or as a reply to a comment.
- [`create_or_update_user`](actions/create_or_update_user.md) — Create a new Canny user or update an existing one by id, userID, or email.
- [`create_post`](actions/create_post.md) — Create a new Canny post on a board for a specific author.
- [`list_boards`](actions/list_boards.md) — List all Canny boards available to the authenticated workspace.
- [`list_comments`](actions/list_comments.md) — List Canny comments with optional filtering and pagination.
- [`list_posts`](actions/list_posts.md) — List Canny posts with optional filtering, search, sorting, and pagination.
- [`list_users`](actions/list_users.md) — List Canny users with cursor-based pagination.
- [`retrieve_board`](actions/retrieve_board.md) — Retrieve a single Canny board by board ID.
- [`retrieve_post`](actions/retrieve_post.md) — Retrieve a single Canny post by post ID.
- [`retrieve_user`](actions/retrieve_user.md) — Retrieve a single Canny user by id, userID, or email.
- [`update_post`](actions/update_post.md) — Update mutable fields on an existing Canny post.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Canny state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Canny is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=canny
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Canny homepage: https://canny.io
