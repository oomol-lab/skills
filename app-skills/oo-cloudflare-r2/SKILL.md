---
name: oo-cloudflare-r2
description: "Cloudflare R2 (cloudflare.com). Use this skill for ANY Cloudflare R2 request — reading, creating, updating, and deleting data. Whenever a task involves Cloudflare R2, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Cloudflare R2"
  author: "OOMOL"
  version: "1.0.1"
  service: "cloudflare_r2"
  categories: "Storage, Developer Tools"
  homepage: "https://www.cloudflare.com"
  icon: "https://static.oomol.com/logo/third-party/Cloudflare.svg"
---

# Cloudflare R2

Operate **Cloudflare R2** through your OOMOL-connected account. This skill calls the `cloudflare_r2` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Developer Tools. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Cloudflare R2. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "cloudflare_r2" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "cloudflare_r2" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_bucket`](actions/create_bucket.md) — Create an R2 bucket in a Cloudflare account.
- [`delete_bucket`](actions/delete_bucket.md) — Delete an R2 bucket by name.
- [`delete_bucket_cors_policy`](actions/delete_bucket_cors_policy.md) — Delete the bucket-level CORS policy for an R2 bucket.
- [`get_bucket`](actions/get_bucket.md) — Get one R2 bucket by name.
- [`get_bucket_cors_policy`](actions/get_bucket_cors_policy.md) — Fetch the bucket-level CORS policy for an R2 bucket.
- [`list_buckets`](actions/list_buckets.md) — List the R2 buckets in a Cloudflare account.
- [`update_bucket`](actions/update_bucket.md) — Update mutable R2 bucket properties such as default storage class or jurisdiction.
- [`update_bucket_cors_policy`](actions/update_bucket_cors_policy.md) — Replace the bucket-level CORS policy for an R2 bucket.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Cloudflare R2 state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Cloudflare R2 is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential, OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=cloudflare_r2
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Cloudflare R2 homepage: https://www.cloudflare.com
