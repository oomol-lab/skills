---
name: oo-cloudflare-worker
description: "Cloudflare Worker (workers.cloudflare.com). Use this skill for ANY Cloudflare Worker request — reading, creating, updating, and deleting data. Whenever a task involves Cloudflare Worker, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Cloudflare Worker"
  author: "OOMOL"
  version: "1.0.0"
  service: "cloudflare_worker"
  categories: "Developer Tools"
  homepage: "https://workers.cloudflare.com"
  icon: "https://static.oomol.com/logo/third-party/Cloudflare.svg"
---

# Cloudflare Worker

Operate **Cloudflare Worker** through your OOMOL-connected account. This skill calls the `cloudflare_worker` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 18 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Cloudflare Worker. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "cloudflare_worker" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "cloudflare_worker" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_worker`](actions/create_worker.md) — Create a Cloudflare Worker using the Workers beta API.
- [`delete_worker`](actions/delete_worker.md) — Delete a Cloudflare Worker and its associated resources using the Workers beta API.
- [`delete_worker_script`](actions/delete_worker_script.md) — Delete a Cloudflare Worker script.
- [`delete_worker_script_secret`](actions/delete_worker_script_secret.md) — Delete a secret binding from a Cloudflare Worker script.
- [`edit_worker`](actions/edit_worker.md) — Partially update a Cloudflare Worker using the Workers beta API while leaving omitted fields unchanged.
- [`get_worker`](actions/get_worker.md) — Get one Worker by Worker ID using the Workers beta API.
- [`get_worker_script_content`](actions/get_worker_script_content.md) — Fetch the raw source content for a Cloudflare Worker script.
- [`get_worker_script_secret`](actions/get_worker_script_secret.md) — Get one secret binding attached to a Cloudflare Worker script.
- [`get_worker_script_settings`](actions/get_worker_script_settings.md) — Get Worker metadata and configuration for a Cloudflare Worker script.
- [`list_worker_script_secrets`](actions/list_worker_script_secrets.md) — List secret bindings attached to a Cloudflare Worker script.
- [`list_worker_scripts`](actions/list_worker_scripts.md) — List Worker scripts in a Cloudflare account.
- [`list_workers`](actions/list_workers.md) — List Workers in a Cloudflare account using the Workers beta API.
- [`patch_worker_script_settings`](actions/patch_worker_script_settings.md) — Patch Worker metadata and configuration for a Cloudflare Worker script.
- [`put_worker_script_content`](actions/put_worker_script_content.md) — Replace only the content of a Cloudflare Worker script without changing metadata.
- [`put_worker_script_secret`](actions/put_worker_script_secret.md) — Add or replace a secret_text binding on a Cloudflare Worker script.
- [`search_worker_scripts`](actions/search_worker_scripts.md) — Search Worker scripts in a Cloudflare account by name or script tag.
- [`update_worker`](actions/update_worker.md) — Replace a Cloudflare Worker using the Workers beta API, setting omitted fields to API defaults.
- [`upload_worker_script`](actions/upload_worker_script.md) — Create or replace a Cloudflare Worker script by uploading a module bundle as multipart/form-data.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Cloudflare Worker state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Cloudflare Worker is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=cloudflare_worker
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Cloudflare Worker homepage: https://workers.cloudflare.com
