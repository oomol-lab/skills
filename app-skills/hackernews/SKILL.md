---
name: hackernews
description: "Hacker News (news.ycombinator.com). Use this skill for ANY Hacker News request — searching and reading data. Whenever a task involves Hacker News, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Hacker News"
  author: "OOMOL"
  version: "1.0.0"
  service: "hackernews"
  categories: "Social"
  homepage: "https://news.ycombinator.com"
  icon: "https://static.oomol.com/logo/third-party/Hacker%20News.svg"
---

# Hacker News

Operate **Hacker News** through your OOMOL-connected account. This skill calls the `hackernews` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social. Exposes 14 action(s).

## Running an action

Hacker News needs no account connection. Assume the oo CLI is installed and signed in. **Do not run `oo auth login` proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "hackernews" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "hackernews" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_ask_stories`](actions/get_ask_stories.md) — Get the latest Ask HN story IDs from Hacker News.
- [`get_best_stories`](actions/get_best_stories.md) — Get the best story IDs from Hacker News ranked by score.
- [`get_item`](actions/get_item.md) — Get a Hacker News item by its numeric ID.
- [`get_item_with_id`](actions/get_item_with_id.md) — Get a Hacker News item with a bounded nested comment tree.
- [`get_job_stories`](actions/get_job_stories.md) — Get the latest job story IDs from Hacker News.
- [`get_latest_posts`](actions/get_latest_posts.md) — Get the latest Hacker News posts via Algolia search_by_date.
- [`get_max_item_id`](actions/get_max_item_id.md) — Get the current largest Hacker News item ID.
- [`get_new_stories`](actions/get_new_stories.md) — Get the newest story IDs from Hacker News.
- [`get_show_stories`](actions/get_show_stories.md) — Get the latest Show HN story IDs from Hacker News.
- [`get_top_stories`](actions/get_top_stories.md) — Get the top story IDs from Hacker News sorted by front page position.
- [`get_updates`](actions/get_updates.md) — Get recently changed items and user profiles from Hacker News.
- [`get_user`](actions/get_user.md) — Get a Hacker News user's public profile summary by username.
- [`get_user_by_username`](actions/get_user_by_username.md) — Get a Hacker News user's detailed public profile by username.
- [`search_posts`](actions/search_posts.md) — Search Hacker News posts using Algolia full-text search.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Hacker News state — confirm the exact payload and effect with the user before running.**
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

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Hacker News homepage: https://news.ycombinator.com
