---
name: oo-aws-s3
description: "AWS S3 (aws.amazon.com). Use this skill for ANY AWS S3 request — reading, creating, updating, and deleting data. Whenever a task involves AWS S3, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AWS S3"
  author: "OOMOL"
  version: "1.0.0"
  service: "aws_s3"
  categories: "Storage, Developer Tools"
  homepage: "https://aws.amazon.com/s3/"
  icon: "https://static.oomol.com/logo/third-party/aws_s3.svg"
---

# AWS S3

Operate **AWS S3** through your OOMOL-connected account. This skill calls the `aws_s3` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Storage, Developer Tools. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AWS S3. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "aws_s3" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "aws_s3" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_object`](actions/delete_object.md) — Delete one S3 object.
- [`generate_presigned_url`](actions/generate_presigned_url.md) — Generate a pre-signed S3 URL for reading, uploading, or deleting one object.
- [`head_object`](actions/head_object.md) — Fetch structured metadata for one S3 object.
- [`list_buckets`](actions/list_buckets.md) — List Amazon S3 buckets visible to the connected AWS credential.
- [`list_objects`](actions/list_objects.md) — List objects in an S3 bucket with the ListObjectsV2 API.
- [`put_object`](actions/put_object.md) — Upload one object to S3 from a public URL, plain text, or base64-encoded content.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AWS S3 state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AWS S3 is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=aws_s3
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AWS S3 homepage: https://aws.amazon.com/s3/
