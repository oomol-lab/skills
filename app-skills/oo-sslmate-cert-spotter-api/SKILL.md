---
name: oo-sslmate-cert-spotter-api
description: "Cert Spotter (sslmate.com). Use this skill for ANY Cert Spotter request — reading, creating, updating, and deleting data. Whenever a task involves Cert Spotter, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Cert Spotter"
  author: "OOMOL"
  version: "1.0.0"
  service: "sslmate_cert_spotter_api"
  categories: "Security & Identity, Data & Analytics"
  homepage: "https://sslmate.com/certspotter/"
  icon: "https://static.oomol.com/logo/third-party/SSLMate%20Cert%20Spotter%20API.svg"
---

# Cert Spotter

Operate **Cert Spotter** through your OOMOL-connected account. This skill calls the `sslmate_cert_spotter_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Cert Spotter. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sslmate_cert_spotter_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sslmate_cert_spotter_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_monitored_domain`](actions/delete_monitored_domain.md) — Delete one monitored domain configuration from the connected Cert Spotter account.
- [`get_monitored_domain`](actions/get_monitored_domain.md) — Get one monitored domain configuration from the connected Cert Spotter account.
- [`list_certificate_issuances`](actions/list_certificate_issuances.md) — List certificate issuances for one domain from the Cert Spotter CT Search API.
- [`list_monitored_domains`](actions/list_monitored_domains.md) — List monitored domains configured in the connected Cert Spotter account.
- [`upsert_monitored_domain`](actions/upsert_monitored_domain.md) — Create or update one monitored domain configuration in the connected Cert Spotter account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Cert Spotter state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Cert Spotter is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=sslmate_cert_spotter_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Cert Spotter homepage: https://sslmate.com/certspotter/
