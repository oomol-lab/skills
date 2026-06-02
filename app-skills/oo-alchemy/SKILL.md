---
name: oo-alchemy
description: "Alchemy (alchemy.com). Use this skill for ANY Alchemy request — searching and reading data. Whenever a task involves Alchemy, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Alchemy"
  author: "OOMOL"
  version: "1.0.0"
  service: "alchemy"
  categories: "Developer Tools, Data & Analytics, Finance"
  homepage: "https://www.alchemy.com"
  icon: "https://static.oomol.com/logo/third-party/alchemy.svg"
---

# Alchemy

Operate **Alchemy** through your OOMOL-connected account. This skill calls the `alchemy` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics, Finance. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Alchemy. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "alchemy" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "alchemy" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_asset_transfers`](actions/get_asset_transfers.md) — Retrieve historical asset transfers for Ethereum mainnet addresses through Alchemy.
- [`get_nft_metadata`](actions/get_nft_metadata.md) — Retrieve metadata for a specific NFT from Alchemy Ethereum mainnet.
- [`get_nfts_for_owner`](actions/get_nfts_for_owner.md) — Retrieve NFTs currently owned by an address from Alchemy Ethereum mainnet.
- [`get_token_balances`](actions/get_token_balances.md) — Retrieve ERC-20 token balances for a wallet address from Alchemy Ethereum mainnet.
- [`get_token_metadata`](actions/get_token_metadata.md) — Retrieve ERC-20 token metadata for one contract from Alchemy Ethereum mainnet.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Alchemy state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Alchemy is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=alchemy
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Alchemy homepage: https://www.alchemy.com
