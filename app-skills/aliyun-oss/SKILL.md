---
name: aliyun-oss
description: "Alibaba Cloud OSS (alibabacloud.com). Use this skill for ANY Alibaba Cloud OSS request — reading, creating, updating, and deleting data. Whenever a task involves Alibaba Cloud OSS, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Alibaba Cloud OSS"
  author: "OOMOL"
  version: "1.0.0"
  service: "aliyun_oss"
  categories: "Storage, Developer Tools"
  homepage: "https://www.alibabacloud.com"
  icon: "https://static.oomol.com/logo/third-party/alibabacloud.svg"
---

# Alibaba Cloud OSS

Operate **Alibaba Cloud OSS** through your OOMOL-connected account. This skill calls the `aliyun_oss` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Developer Tools. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Alibaba Cloud OSS. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "aliyun_oss" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "aliyun_oss" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_object`](actions/delete_object.md) — Delete one OSS object.
- [`generate_presigned_url`](actions/generate_presigned_url.md) — Generate a pre-signed OSS URL for reading, uploading, or deleting one object.
- [`head_object`](actions/head_object.md) — Fetch structured metadata for one OSS object.
- [`list_buckets`](actions/list_buckets.md) — List OSS buckets visible to the connected Alibaba Cloud credential.
- [`list_objects`](actions/list_objects.md) — List objects in an OSS bucket with the ListObjectsV2 API.
- [`put_object`](actions/put_object.md) — Upload one object to OSS from a public URL, plain text, or base64-encoded content.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Alibaba Cloud OSS state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Alibaba Cloud OSS is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential, federated) at:

  ```text
  https://console.oomol.com/app-connections?provider=aliyun_oss
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Alibaba Cloud OSS homepage: https://www.alibabacloud.com
