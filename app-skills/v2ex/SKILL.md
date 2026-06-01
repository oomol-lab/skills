---
name: v2ex
description: "V2EX (v2ex.com). Use this skill for ANY V2EX request — reading, creating, updating, and deleting data. Whenever a task involves V2EX, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "V2EX"
  author: "OOMOL"
  version: "1.0.0"
  service: "v2ex"
  categories: "Social, Developer Tools"
  homepage: "https://www.v2ex.com"
  icon: "https://static.oomol.com/logo/third-party/v2ex.png"
---

# V2EX

Operate **V2EX** through your OOMOL-connected account. This skill calls the `v2ex` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Developer Tools. Exposes 13 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected V2EX. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "v2ex" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "v2ex" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`boost_topic`](actions/boost_topic.md) — Boost one of the authenticated member's V2EX topics to the homepage.
- [`create_token`](actions/create_token.md) — Create a new V2EX Personal Access Token from an existing token.
- [`delete_notification`](actions/delete_notification.md) — Delete one V2EX notification by its numeric identifier.
- [`get_current_member`](actions/get_current_member.md) — Fetch the authenticated V2EX member profile.
- [`get_current_token`](actions/get_current_token.md) — Fetch metadata for the V2EX Personal Access Token used by this connection.
- [`get_node`](actions/get_node.md) — Fetch a V2EX node by node name.
- [`get_topic`](actions/get_topic.md) — Fetch a V2EX topic by numeric identifier.
- [`list_hot_topics`](actions/list_hot_topics.md) — Fetch public hot topics from the V2EX legacy JSON API. Responses may be served from V2EX or CDN cache.
- [`list_latest_topics`](actions/list_latest_topics.md) — Fetch public latest topics from the V2EX legacy JSON API. Responses may be served from V2EX or CDN cache.
- [`list_node_topics`](actions/list_node_topics.md) — Fetch topics from a V2EX node.
- [`list_notifications`](actions/list_notifications.md) — Fetch the latest V2EX notifications for the authenticated member.
- [`list_topic_replies`](actions/list_topic_replies.md) — Fetch replies for a V2EX topic.
- [`set_topic_sticky`](actions/set_topic_sticky.md) — Set one of the authenticated member's V2EX topics as sticky.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change V2EX state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — V2EX is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=v2ex
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- V2EX homepage: https://www.v2ex.com
