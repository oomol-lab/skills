---
name: oo-publora
description: "Publora (publora.com). Use this skill for ANY Publora request — reading, creating, updating, and deleting data. Whenever a task involves Publora, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Publora"
  author: "OOMOL"
  version: "1.0.0"
  services: ["publora"]
  icon: "https://static.oomol.com/logo/third-party/publora.svg"
---

# Publora

Operate **Publora** through your OOMOL-connected account. This skill calls the `publora` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Publora. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "publora" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "publora" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_post` — Create a Publora post for one or more connected accounts: saved as a draft, scheduled with scheduledTime, or published at once with publishNow. Text, media URLs, per-platform settings and first comments go in one request. [write]
- `delete_post` — Delete a Publora post group with its per-account posts and uploaded media, for example to cancel a scheduled post. [destructive]
- `get_account_context` — Read the Publora plan, enabled features, monthly and scheduled post quotas, how far ahead posts can be scheduled, and which platforms the plan allows.
- `get_post` — Get one Publora post with its overall status and, for each account, its text, status, published ID and address.
- `get_post_logs` — Get the publishing events of a Publora post from the last 90 days, oldest first: scheduling, each attempt, retries, successes and failures with their HTTP status and error.
- `list_connections` — List the social accounts connected to Publora, with each connection ID and whether its token still works. Use the IDs as create_post platforms.
- `list_posts` — List Publora posts page by page, filtered by status, platform or date range, with each account's delivery status.
- `update_post` — Change a Publora draft or scheduled post: its text, accounts, media, settings, comments or time, move it between draft and scheduled, or publish it now. A platforms list replaces the stored one; mediaUrls are added to the media already attached. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Publora state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Publora is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/publora
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- Publora homepage: https://publora.com
- API documentation: https://docs.publora.com
