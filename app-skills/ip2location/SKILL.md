---
name: ip2location
description: "IP2Location.io (ip2location.io). Use this skill for ANY IP2Location.io request — searching and reading data. Whenever a task involves IP2Location.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "IP2Location.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "ip2location"
  categories: "Maps & Location, Security & Identity, Data & Analytics"
  homepage: "https://www.ip2location.io"
  icon: "https://static.oomol.com/logo/third-party/ip2location.png"
---

# IP2Location.io

Operate **IP2Location.io** through your OOMOL-connected account. This skill calls the `ip2location` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Security & Identity, Data & Analytics. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected IP2Location.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ip2location" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ip2location" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_domain_whois`](actions/get_domain_whois.md) — Retrieve WHOIS registration details for one domain.
- [`get_ip_geolocation`](actions/get_ip_geolocation.md) — Retrieve geolocation and network metadata for one IPv4 or IPv6 address.
- [`list_hosted_domains`](actions/list_hosted_domains.md) — List the hosted domains associated with one IPv4 or IPv6 address.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change IP2Location.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — IP2Location.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ip2location
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- IP2Location.io homepage: https://www.ip2location.io
