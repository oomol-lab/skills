---
name: oo-yuque
description: "Yuque (yuque.com). Use this skill for ANY Yuque request — reading, creating, updating, and deleting data. Whenever a task involves Yuque, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Yuque"
  author: "OOMOL"
  version: "1.0.0"
  services: ["yuque"]
  icon: "https://static.oomol.com/logo/third-party/yuque.svg"
---

# Yuque

Operate **Yuque** through your OOMOL-connected account. This skill calls the `yuque` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Yuque. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "yuque" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "yuque" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_document` — Create a Yuque document. Omitted visibility inherits the repository setting. [write]
- `create_repository` — Create a Yuque repository for a user or group. [write]
- `delete_document` — Delete a document from a Yuque repository. [destructive]
- `delete_repository` — Delete a Yuque repository. [destructive]
- `get_current_user` — Get the user associated with the Yuque token.
- `get_document` — Read a Yuque document. Omit repo to use the direct document route; page and page_size paginate Table content.
- `get_document_version` — Read a historical Yuque document version and its body.
- `get_repository` — Read a Yuque repository by ID or owner/repository namespace.
- `get_table_of_contents` — Read the nodes and relationships in a Yuque repository's table of contents.
- `list_document_versions` — List the published history of a Yuque document.
- `list_documents` — List documents in a Yuque repository, including optional deleted-document and changed-since filters.
- `list_group_members` — List members of a Yuque group.
- `list_repositories` — List repositories owned by a Yuque user or group.
- `list_user_groups` — List a user's Yuque groups with optional role and offset filters.
- `search` — Search Yuque documents or repositories. Each page contains up to 20 results.
- `update_document` — Update a Yuque document's title, slug, visibility or body. Only supplied fields are sent. [write]
- `update_repository` — Update a Yuque repository, optionally replacing its Markdown table of contents. [write]
- `update_table_of_contents` — Create, move, edit or remove Yuque table of contents nodes. Removing a node does not delete its linked document. [destructive]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Yuque state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Yuque is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/yuque
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- Yuque homepage: https://www.yuque.com
- API documentation: https://www.yuque.com/yuque/developer/api
