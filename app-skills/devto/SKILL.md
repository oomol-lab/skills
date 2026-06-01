---
name: devto
description: "Dev.to (dev.to). Use this skill for ANY Dev.to request — reading, creating, and updating data. Whenever a task involves Dev.to, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Dev.to"
  author: "OOMOL"
  version: "1.0.0"
  service: "devto"
  categories: "Social"
  homepage: "https://dev.to"
  icon: "https://static.oomol.com/logo/third-party/devto.svg"
---

# Dev.to

Operate **Dev.to** through your OOMOL-connected account. This skill calls the `devto` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Dev.to. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "devto" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "devto" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_article`](actions/create_article.md) — Create a new Dev.to article.
- [`get_article`](actions/get_article.md) — Get a Dev.to article by numeric id.
- [`get_article_by_path`](actions/get_article_by_path.md) — Get a Dev.to article by username and slug.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated Dev.to user profile.
- [`get_organization`](actions/get_organization.md) — Get Dev.to organization profile.
- [`list_articles`](actions/list_articles.md) — List published Dev.to articles with query filters.
- [`list_latest_articles`](actions/list_latest_articles.md) — List latest Dev.to articles.
- [`list_my_articles`](actions/list_my_articles.md) — List current user's own Dev.to articles by status.
- [`list_organization_articles`](actions/list_organization_articles.md) — List articles under a Dev.to organization.
- [`list_tags`](actions/list_tags.md) — List Dev.to tags.
- [`list_videos`](actions/list_videos.md) — List Dev.to videos.
- [`update_article`](actions/update_article.md) — Update an existing Dev.to article.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Dev.to state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Dev.to is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=devto
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Dev.to homepage: https://dev.to
