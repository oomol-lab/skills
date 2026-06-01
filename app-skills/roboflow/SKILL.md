---
name: roboflow
description: "Roboflow (roboflow.com). Use this skill for ANY Roboflow request — searching and reading data. Whenever a task involves Roboflow, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Roboflow"
  author: "OOMOL"
  version: "1.0.0"
  service: "roboflow"
  categories: "AI, Developer Tools"
  homepage: "https://roboflow.com/"
  icon: "https://static.oomol.com/logo/third-party/roboflow.svg"
---

# Roboflow

Operate **Roboflow** through your OOMOL-connected account. This skill calls the `roboflow` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Roboflow. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "roboflow" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "roboflow" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`describe_workflow_interface`](actions/describe_workflow_interface.md) — Describe workflow inputs, outputs, typing hints, and kind schemas for a specification or saved Roboflow workflow.
- [`detect_objects`](actions/detect_objects.md) — Run Roboflow hosted object detection for one project version using a public image URL or Base64 image content.
- [`get_execution_engine_versions`](actions/get_execution_engine_versions.md) — List available Roboflow workflow execution engine versions.
- [`get_project_versions`](actions/get_project_versions.md) — Get one Roboflow project and list its available versions.
- [`get_server_info`](actions/get_server_info.md) — Read Roboflow inference server name, version, and UUID.
- [`get_server_metrics`](actions/get_server_metrics.md) — Read Prometheus metrics exposed by the Roboflow inference server.
- [`get_version`](actions/get_version.md) — Read one Roboflow project version and return training/export metadata.
- [`get_workflow_schema`](actions/get_workflow_schema.md) — Fetch the Roboflow workflow block JSON schema.
- [`list_projects`](actions/list_projects.md) — List Roboflow projects visible to the API key workspace.
- [`run_saved_workflow`](actions/run_saved_workflow.md) — Run a workflow saved in Roboflow using workspace and workflow identifiers with runtime inputs.
- [`run_workflow`](actions/run_workflow.md) — Run a Roboflow workflow specification with runtime inputs and return serialized workflow outputs.
- [`validate_workflow`](actions/validate_workflow.md) — Validate a Roboflow workflow specification before running it.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Roboflow state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Roboflow is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=roboflow
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Roboflow homepage: https://roboflow.com/
