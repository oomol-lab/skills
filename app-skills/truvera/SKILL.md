---
name: truvera
description: "Truvera (truvera.io). Use this skill for ANY Truvera request — reading, creating, updating, and deleting data. Whenever a task involves Truvera, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Truvera"
  author: "OOMOL"
  version: "1.0.0"
  service: "truvera"
  categories: "Security & Identity, Developer Tools"
  homepage: "https://truvera.io"
  icon: "https://static.oomol.com/logo/third-party/truvera.svg"
---

# Truvera

Operate **Truvera** through your OOMOL-connected account. This skill calls the `truvera` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Developer Tools. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Truvera. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "truvera" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "truvera" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_credential_schema`](actions/create_credential_schema.md) — Create a credential schema in Truvera and return the background job handle for polling blockchain completion.
- [`create_did`](actions/create_did.md) — Create a new Truvera DID and return the background job handle for polling blockchain completion.
- [`delete_credential_schema`](actions/delete_credential_schema.md) — Delete a Truvera credential schema and return the background job handle for polling completion.
- [`delete_did`](actions/delete_did.md) — Delete a Truvera DID and return the background job handle for polling blockchain completion.
- [`get_credential_schema`](actions/get_credential_schema.md) — Get one Truvera credential schema by schema identifier.
- [`get_did`](actions/get_did.md) — Get one DID document from Truvera by DID value.
- [`get_job`](actions/get_job.md) — Get the latest status and result payload for a Truvera background job.
- [`get_profile`](actions/get_profile.md) — Get the authenticated Truvera account profile for the configured API key.
- [`list_credential_schemas`](actions/list_credential_schemas.md) — List credential schemas created by the authenticated Truvera account.
- [`list_dids`](actions/list_dids.md) — List the DIDs controlled by the authenticated Truvera account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Truvera state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Truvera is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=truvera
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Truvera homepage: https://truvera.io
