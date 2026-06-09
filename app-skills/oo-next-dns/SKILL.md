---
name: oo-next-dns
description: "NextDNS (nextdns.io). Use this skill for ANY NextDNS request — searching and reading data. Whenever a task involves NextDNS, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "NextDNS"
  author: "OOMOL"
  version: "1.0.0"
  service: "next_dns"
  categories: "Security & Identity, Data & Analytics"
  homepage: "https://nextdns.io/"
---

# NextDNS

Operate **NextDNS** through your OOMOL-connected account. This skill calls the `next_dns` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected NextDNS. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "next_dns" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "next_dns" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_analytics_devices`](actions/get_analytics_devices.md) — List per-device DNS query analytics for a NextDNS profile.
- [`get_analytics_domains`](actions/get_analytics_domains.md) — List per-domain DNS query analytics for a NextDNS profile.
- [`get_analytics_reasons`](actions/get_analytics_reasons.md) — List DNS query counts grouped by blocking reason for a NextDNS profile.
- [`get_analytics_status`](actions/get_analytics_status.md) — List DNS query counts grouped by status for a NextDNS profile.
- [`get_logs`](actions/get_logs.md) — List DNS query logs for a NextDNS profile with optional filters.
- [`get_profile`](actions/get_profile.md) — Get one NextDNS profile with its current settings and setup details.
- [`list_profiles`](actions/list_profiles.md) — List NextDNS profiles available to the authenticated account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change NextDNS state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — NextDNS is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=next_dns
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- NextDNS homepage: https://nextdns.io/
