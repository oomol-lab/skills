---
name: big-data-cloud
description: "BigDataCloud (bigdatacloud.com). Use this skill for ANY BigDataCloud request — searching and reading data. Whenever a task involves BigDataCloud, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "BigDataCloud"
  author: "OOMOL"
  version: "1.0.0"
  service: "big_data_cloud"
  categories: "Maps & Location, Security & Identity, Data & Analytics"
  homepage: "https://www.bigdatacloud.com"
  icon: "https://static.oomol.com/logo/third-party/BigDataCloud.svg"
---

# BigDataCloud

Operate **BigDataCloud** through your OOMOL-connected account. This skill calls the `big_data_cloud` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Security & Identity, Data & Analytics. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected BigDataCloud. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "big_data_cloud" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "big_data_cloud" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_country_by_ip`](actions/get_country_by_ip.md) — Get country-level BigDataCloud geolocation data for an IP address.
- [`get_network_by_ip`](actions/get_network_by_ip.md) — Get BigDataCloud network and ASN details for an IP address.
- [`get_timezone_by_ip`](actions/get_timezone_by_ip.md) — Get BigDataCloud timezone data for an IP address.
- [`reverse_geocode_with_timezone`](actions/reverse_geocode_with_timezone.md) — Reverse geocode coordinates and return timezone data from BigDataCloud.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change BigDataCloud state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — BigDataCloud is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=big_data_cloud
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- BigDataCloud homepage: https://www.bigdatacloud.com
