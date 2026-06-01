---
name: cloudflare-dns
description: "Cloudflare DNS (cloudflare.com). Use this skill for ANY Cloudflare DNS request — reading, creating, updating, and deleting data. Whenever a task involves Cloudflare DNS, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Cloudflare DNS"
  author: "OOMOL"
  version: "1.0.0"
  service: "cloudflare_dns"
  categories: "Developer Tools, Security & Identity"
  homepage: "https://www.cloudflare.com"
  icon: "https://static.oomol.com/logo/third-party/Cloudflare.svg"
---

# Cloudflare DNS

Operate **Cloudflare DNS** through your OOMOL-connected account. This skill calls the `cloudflare_dns` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Security & Identity. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Cloudflare DNS. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "cloudflare_dns" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "cloudflare_dns" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_dns_record`](actions/create_dns_record.md) — Create a DNS record inside a Cloudflare zone.
- [`delete_dns_record`](actions/delete_dns_record.md) — Delete one DNS record from a Cloudflare zone.
- [`get_dns_record`](actions/get_dns_record.md) — Get one DNS record from a Cloudflare zone.
- [`get_zone`](actions/get_zone.md) — Get one Cloudflare zone by zone ID.
- [`list_dns_records`](actions/list_dns_records.md) — List DNS records inside one Cloudflare zone.
- [`list_zones`](actions/list_zones.md) — List the Cloudflare zones visible to the current API token.
- [`update_dns_record`](actions/update_dns_record.md) — Patch one DNS record inside a Cloudflare zone.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Cloudflare DNS state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Cloudflare DNS is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=cloudflare_dns
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Cloudflare DNS homepage: https://www.cloudflare.com
