---
name: owl-protocol
description: "Owl Protocol (owlprotocol.xyz). Use this skill for ANY Owl Protocol request — reading, creating, and updating data. Whenever a task involves Owl Protocol, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Owl Protocol"
  author: "OOMOL"
  version: "1.0.0"
  service: "owl_protocol"
  categories: "Developer Tools, Finance"
  homepage: "https://owlprotocol.xyz"
  icon: "https://static.oomol.com/logo/third-party/owl_protocol.png"
---

# Owl Protocol

Operate **Owl Protocol** through your OOMOL-connected account. This skill calls the `owl_protocol` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Finance. Exposes 3 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Owl Protocol. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "owl_protocol" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "owl_protocol" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_project_info`](actions/get_project_info.md) — Read the connected Owl Protocol project's summary information.
- [`get_project_token`](actions/get_project_token.md) — Read one Owl Protocol token metadata record by chain, contract address, and token id.
- [`patch_project_token`](actions/patch_project_token.md) — Patch one Owl Protocol token metadata record with a JSON metadata object only.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Owl Protocol state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Owl Protocol is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=owl_protocol
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Owl Protocol homepage: https://owlprotocol.xyz
