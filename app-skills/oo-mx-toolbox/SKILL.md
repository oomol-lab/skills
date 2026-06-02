---
name: oo-mx-toolbox
description: "MxToolbox. Use this skill for ANY MxToolbox request — searching and reading data. Whenever a task involves MxToolbox, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "MxToolbox"
  author: "OOMOL"
  version: "1.0.0"
  service: "mx_toolbox"
  categories: "Communication, Developer Tools"
  icon: "https://static.oomol.com/logo/third-party/mx_toolbox.svg"
---

# MxToolbox

Operate **MxToolbox** through your OOMOL-connected account. This skill calls the `mx_toolbox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Developer Tools. Exposes 13 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected MxToolbox. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "mx_toolbox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "mx_toolbox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`lookup_bimi_record`](actions/lookup_bimi_record.md) — Look up the BIMI record for a domain and return the official MxToolbox response payload.
- [`lookup_blacklist`](actions/lookup_blacklist.md) — Check whether a domain or IP is listed on blacklists and return the official MxToolbox response payload.
- [`lookup_dkim`](actions/lookup_dkim.md) — Look up one DKIM record and return the official MxToolbox response payload.
- [`lookup_dmarc`](actions/lookup_dmarc.md) — Look up the DMARC record for a domain and return the official MxToolbox response payload.
- [`lookup_dns`](actions/lookup_dns.md) — Perform a comprehensive DNS lookup for a domain and return the official MxToolbox response payload.
- [`lookup_http`](actions/lookup_http.md) — Run an HTTP lookup for a domain and return the official MxToolbox response payload.
- [`lookup_mta_sts_record`](actions/lookup_mta_sts_record.md) — Look up the MTA-STS record for a domain and return the official MxToolbox response payload.
- [`lookup_mx`](actions/lookup_mx.md) — Look up MX records for a domain and return the official MxToolbox response payload.
- [`lookup_ping`](actions/lookup_ping.md) — Ping a domain or IP and return the official MxToolbox response payload.
- [`lookup_smtp`](actions/lookup_smtp.md) — Run an SMTP lookup for a domain and return the official MxToolbox response payload.
- [`lookup_spf`](actions/lookup_spf.md) — Look up the SPF record for a domain and return the official MxToolbox response payload.
- [`monitor_status`](actions/monitor_status.md) — Retrieve the current status of all monitors in the authenticated MxToolbox account.
- [`usage_check`](actions/usage_check.md) — Retrieve API usage statistics for DNS and network lookups from MxToolbox.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change MxToolbox state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — MxToolbox is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=mx_toolbox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.
