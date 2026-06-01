---
name: beaconchain
description: "Beaconcha.in (beaconcha.in). Use this skill for ANY Beaconcha.in request — searching and reading data. Whenever a task involves Beaconcha.in, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Beaconcha.in"
  author: "OOMOL"
  version: "1.0.0"
  service: "beaconchain"
  categories: "Finance, Data & Analytics"
  homepage: "https://beaconcha.in"
  icon: "https://static.oomol.com/logo/third-party/beaconchain.svg"
---

# Beaconcha.in

Operate **Beaconcha.in** through your OOMOL-connected account. This skill calls the `beaconchain` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Beaconcha.in. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "beaconchain" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "beaconchain" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_network_performance`](actions/get_network_performance.md) — Get aggregated Beaconcha.in network performance metrics for a fixed evaluation window.
- [`get_staking_queues`](actions/get_staking_queues.md) — Get the current staking queue metrics for the requested Beaconcha.in chain.
- [`get_validator`](actions/get_validator.md) — Get the current validator snapshot for a single validator identifier.
- [`get_validator_consensus_rewards`](actions/get_validator_consensus_rewards.md) — Get per-validator reward breakdowns for a finalized Beaconcha.in epoch.
- [`list_validators`](actions/list_validators.md) — List the current validator snapshots for one or more validator identifiers.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Beaconcha.in state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Beaconcha.in is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=beaconchain
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Beaconcha.in homepage: https://beaconcha.in
