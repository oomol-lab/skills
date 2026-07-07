---
name: oo-wordpress
description: "WordPress (wordpress.org). Use this skill for ANY WordPress request — reading, creating, updating, and deleting data. Whenever a task involves WordPress, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "WordPress"
  author: "OOMOL"
  version: "1.0.0"
  services: ["wordpress"]
  icon: "https://static.oomol.com/logo/third-party/wordpress.png"
---

# WordPress

Operate **WordPress** through your OOMOL-connected account. This skill calls the `wordpress` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected WordPress. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "wordpress" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "wordpress" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_category` — Create a WordPress category. [write]
- `create_page` — Create a WordPress page. [write]
- `create_post` — Create a WordPress post. [write]
- `create_tag` — Create a WordPress tag. [write]
- `delete_comment` — Delete a WordPress comment by ID. [destructive]
- `delete_page` — Delete a WordPress page by ID. [destructive]
- `delete_post` — Delete a WordPress post by ID. [destructive]
- `get_current_user` — Get the authenticated WordPress user.
- `get_page` — Get a WordPress page by ID.
- `get_post` — Get a WordPress post by ID. [write]
- `list_categories` — List WordPress categories with optional filters and pagination.
- `list_comments` — List WordPress comments with optional filters and pagination.
- `list_pages` — List WordPress pages with optional filters and pagination.
- `list_posts` — List WordPress posts with optional filters and pagination.
- `list_tags` — List WordPress tags with optional filters and pagination.
- `update_comment` — Update a WordPress comment by ID. [write]
- `update_page` — Update a WordPress page by ID. [write]
- `update_post` — Update a WordPress post by ID. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change WordPress state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — WordPress is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=wordpress
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- WordPress homepage: https://wordpress.org
