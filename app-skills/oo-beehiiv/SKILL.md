---
name: oo-beehiiv
description: "Beehiiv (beehiiv.com). Use this skill for ANY Beehiiv request — reading, creating, and updating data. Whenever a task involves Beehiiv, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Beehiiv"
  author: "OOMOL"
  version: "1.0.0"
  service: "beehiiv"
  categories: "Marketing, Productivity"
  homepage: "https://www.beehiiv.com"
---

# Beehiiv

Operate **Beehiiv** through your OOMOL-connected account. This skill calls the `beehiiv` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Productivity. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Beehiiv. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "beehiiv" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "beehiiv" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_post`](actions/get_post.md) — Fetch one Beehiiv post by ID with optional statistics or content expansion.
- [`get_publication`](actions/get_publication.md) — Fetch one Beehiiv publication by ID with optional statistics expansion.
- [`get_subscription`](actions/get_subscription.md) — Fetch one Beehiiv subscription by ID with optional expansions.
- [`list_posts`](actions/list_posts.md) — List Beehiiv posts for a publication with documented filters and optional expansions.
- [`list_publications`](actions/list_publications.md) — List Beehiiv publications associated with the API key, with optional sorting and expansion.
- [`list_subscriptions`](actions/list_subscriptions.md) — List Beehiiv subscriptions for a publication with cursor pagination and documented filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Beehiiv state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Beehiiv is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=beehiiv
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Beehiiv homepage: https://www.beehiiv.com
