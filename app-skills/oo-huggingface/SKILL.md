---
name: oo-huggingface
description: "Hugging Face (huggingface.co). Use this skill for ANY Hugging Face request — searching and reading data. Whenever a task involves Hugging Face, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Hugging Face"
  author: "OOMOL"
  version: "1.0.0"
  service: "huggingface"
  categories: "AI, Developer Tools"
  homepage: "https://huggingface.co"
  icon: "https://static.oomol.com/logo/third-party/Hugging%20Face.svg"
---

# Hugging Face

Operate **Hugging Face** through your OOMOL-connected account. This skill calls the `huggingface` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Hugging Face. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "huggingface" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "huggingface" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`generate_chat_completion`](actions/generate_chat_completion.md) — Generate a chat completion with Hugging Face Inference Providers.
- [`generate_embeddings`](actions/generate_embeddings.md) — Generate text embeddings with Hugging Face inference.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated Hugging Face user profile.
- [`get_dataset_first_rows`](actions/get_dataset_first_rows.md) — Preview the first rows of a dataset split from the Hugging Face Dataset Viewer.
- [`get_dataset_info`](actions/get_dataset_info.md) — Get detailed metadata for a Hugging Face dataset by dataset id.
- [`get_dataset_statistics`](actions/get_dataset_statistics.md) — Get column statistics for a dataset split from the Hugging Face Dataset Viewer.
- [`get_model_info`](actions/get_model_info.md) — Get detailed metadata for a Hugging Face model by modelId.
- [`get_space_info`](actions/get_space_info.md) — Get detailed metadata for a Hugging Face Space by repo id.
- [`get_trending`](actions/get_trending.md) — Get trending Hugging Face repositories across models, datasets, and Spaces.
- [`list_datasets`](actions/list_datasets.md) — List Hugging Face datasets using user-friendly search filters.
- [`list_endpoints`](actions/list_endpoints.md) — List Hugging Face Inference Endpoints for a namespace.
- [`list_models`](actions/list_models.md) — List Hugging Face models using user-friendly search filters.
- [`list_repo_files`](actions/list_repo_files.md) — List files in a Hugging Face repository tree.
- [`list_spaces`](actions/list_spaces.md) — List Hugging Face Spaces using user-friendly discovery filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Hugging Face state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Hugging Face is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=huggingface
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Hugging Face homepage: https://huggingface.co
