---
name: oo-seqera
description: "Seqera (seqera.io). Use this skill for ANY Seqera request — searching and reading data. Whenever a task involves Seqera, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Seqera"
  author: "OOMOL"
  version: "1.0.0"
  service: "seqera"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://seqera.io"
  icon: "https://static.oomol.com/logo/third-party/Seqera.svg"
---

# Seqera

Operate **Seqera** through your OOMOL-connected account. This skill calls the `seqera` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Seqera. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "seqera" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "seqera" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_current_user`](actions/get_current_user.md) — Retrieve the current Seqera user profile and default workspace information.
- [`get_pipeline`](actions/get_pipeline.md) — Retrieve one Seqera pipeline by pipeline ID.
- [`get_workflow`](actions/get_workflow.md) — Retrieve one Seqera workflow run by workflow ID.
- [`get_workspace`](actions/get_workspace.md) — Retrieve one Seqera workspace by organization ID and workspace ID.
- [`launch_workflow`](actions/launch_workflow.md) — Launch a Seqera workflow from a pipeline repository or registered pipeline.
- [`list_pipelines`](actions/list_pipelines.md) — List Seqera pipelines in the current user context or a specific workspace.
- [`list_user_workspaces`](actions/list_user_workspaces.md) — List the workspaces and organizations visible to the current Seqera user.
- [`list_workflows`](actions/list_workflows.md) — List Seqera workflow runs in the current user context or a specific workspace.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Seqera state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Seqera is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=seqera
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Seqera homepage: https://seqera.io
