---
name: aws-sts
description: "AWS STS (aws.amazon.com). Use this skill for ANY AWS STS request — searching and reading data. Whenever a task involves AWS STS, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AWS STS"
  author: "OOMOL"
  version: "1.0.0"
  service: "aws_sts"
  categories: "Security & Identity, Developer Tools"
  homepage: "https://aws.amazon.com/iam/"
  icon: "https://static.oomol.com/logo/third-party/aws_sts.svg"
---

# AWS STS

Operate **AWS STS** through your OOMOL-connected account. This skill calls the `aws_sts` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Developer Tools. Exposes 2 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AWS STS. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "aws_sts" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "aws_sts" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`assume_role`](actions/assume_role.md) — Use a connected AWS access key pair to call STS AssumeRole and return temporary credentials.
- [`get_federated_credentials`](actions/get_federated_credentials.md) — Return AWS STS temporary credentials from the connected OOMOL OIDC federation configuration.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change AWS STS state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AWS STS is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential, federated) at:

  ```text
  https://console.oomol.com/app-connections?provider=aws_sts
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AWS STS homepage: https://aws.amazon.com/iam/
