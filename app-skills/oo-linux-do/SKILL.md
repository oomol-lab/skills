---
name: oo-linux-do
description: "Linux DO (linux.do). Use this skill for ANY Linux DO request — searching and reading data. Whenever a task involves Linux DO, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Linux DO"
  author: "OOMOL"
  version: "1.0.0"
  service: "linux_do"
  categories: "Social, Developer Tools"
  homepage: "https://linux.do"
---

# Linux DO

Operate **Linux DO** through your OOMOL-connected account. This skill calls the `linux_do` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Developer Tools. Exposes 5 action(s).

## Running an action

Linux DO needs no account connection. Assume the oo CLI is installed and signed in. **Do not run `oo auth login` proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "linux_do" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "linux_do" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`list_categories`](actions/list_categories.md) — List public Linux DO categories.
- [`list_latest_posts`](actions/list_latest_posts.md) — List the latest public posts across Linux DO topics.
- [`list_latest_topics`](actions/list_latest_topics.md) — List the latest public topics from Linux DO's Discourse forum.
- [`list_tags`](actions/list_tags.md) — List public Linux DO tags.
- [`list_top_topics`](actions/list_top_topics.md) — List public top topics from Linux DO for a time period.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Linux DO state — confirm the exact payload and effect with the user before running.**
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

- Linux DO homepage: https://linux.do
