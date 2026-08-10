---
name: oo-baidu-netdisk
description: "Baidu Netdisk (pan.baidu.com). Use this skill for ANY Baidu Netdisk request — reading, creating, updating, and deleting data. Whenever a task involves Baidu Netdisk, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Baidu Netdisk"
  author: "OOMOL"
  version: "1.0.0"
  services: ["baidu_netdisk"]
  icon: "https://static.oomol.com/logo/third-party/baidu_netdisk.png"
---

# Baidu Netdisk

Operate **Baidu Netdisk** through your OOMOL-connected account. This skill calls the `baidu_netdisk` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Baidu Netdisk. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "baidu_netdisk" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "baidu_netdisk" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `copy` — Synchronously copy one file or folder within the Baidu Netdisk app directory. [write]
- `create_folder` — Create one folder below the configured Baidu Netdisk app directory. [write]
- `create_text_file` — Create one UTF-8 text file of up to 4 MiB in the configured Baidu Netdisk app directory. [write]
- `delete` — Delete one file or folder within the configured Baidu Netdisk app directory. [destructive]
- `get_current_account` — Get the current Baidu Netdisk account and membership summary.
- `get_file_metadata` — Get normalized metadata for up to 100 Baidu Netdisk file IDs.
- `get_quota` — Get total, used, remaining, free, and expiring Baidu Netdisk capacity.
- `list_files` — List files and folders within the configured Baidu Netdisk app directory.
- `move` — Synchronously move one file or folder within the Baidu Netdisk app directory. [write]
- `rename` — Synchronously rename one file or folder within the Baidu Netdisk app directory. [write]
- `search_files` — Search up to 500 files and folders within the Baidu Netdisk app directory.
- `semantic_search_files` — Search files in the configured Baidu Netdisk app directory using a natural-language description.
- `upload_file_from_url` — Download one public URL and upload its bytes to the configured Baidu Netdisk app directory. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Baidu Netdisk state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Baidu Netdisk is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=baidu_netdisk
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Baidu Netdisk homepage: https://pan.baidu.com
