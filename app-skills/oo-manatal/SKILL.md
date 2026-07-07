---
name: oo-manatal
description: "Manatal (manatal.com). Use this skill for ANY Manatal request — reading, creating, and updating data. Whenever a task involves Manatal, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Manatal"
  author: "OOMOL"
  version: "1.0.0"
  services: ["manatal"]
  icon: "https://static.oomol.com/logo/third-party/manatal.svg"
---

# Manatal

Operate **Manatal** through your OOMOL-connected account. This skill calls the `manatal` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Manatal. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "manatal" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "manatal" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_candidate` — Create a Manatal candidate using JSON-safe profile fields. [write]
- `create_job` — Create a Manatal job using JSON-safe job fields. [write]
- `create_match` — Create a Manatal candidate-job match using JSON-safe match fields. [write]
- `create_organization` — Create a Manatal organization using JSON-safe organization fields. [write]
- `get_candidate` — Retrieve a single Manatal candidate by ID.
- `get_job` — Retrieve a single Manatal job by ID.
- `get_match` — Retrieve a single Manatal candidate-job match by ID.
- `get_organization` — Retrieve a single Manatal organization by ID.
- `list_candidates` — List Manatal candidates with pagination and recruitment profile filters.
- `list_jobs` — List Manatal jobs with pagination and job status filters.
- `list_matches` — List Manatal candidate-job matches with pagination and pipeline filters.
- `list_organizations` — List Manatal organizations with pagination and organization filters.
- `update_candidate` — Partially update a Manatal candidate by ID. [write]
- `update_job` — Partially update a Manatal job by ID. [write]
- `update_match` — Partially update a Manatal candidate-job match by ID. [write]
- `update_organization` — Partially update a Manatal organization by ID. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Manatal state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Manatal is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=manatal
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Manatal homepage: https://www.manatal.com/
