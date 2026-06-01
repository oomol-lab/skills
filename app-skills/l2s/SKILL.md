---
name: l2s
description: "L2S (l2s.is). Use this skill for ANY L2S request — reading, creating, and updating data. Whenever a task involves L2S, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "L2S"
  author: "OOMOL"
  version: "1.0.0"
  service: "l2s"
  categories: "Marketing, Data & Analytics"
  homepage: "https://www.l2s.is"
  icon: "https://static.oomol.com/logo/third-party/l2s.png"
---

# L2S

Operate **L2S** through your OOMOL-connected account. This skill calls the `l2s` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected L2S. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "l2s" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "l2s" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_url_details`](actions/get_url_details.md) — Get the stored details for one shortened URL in L2S.
- [`shorten_url`](actions/shorten_url.md) — Create a shortened URL in L2S with optional custom key, UTM tags, and title.
- [`update_url_details`](actions/update_url_details.md) — Update the stored details for one shortened URL in L2S.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change L2S state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — L2S is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=l2s
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- L2S homepage: https://www.l2s.is
