---
name: oo-showdoc
description: "ShowDoc (showdoc.com.cn). Use this skill for ANY ShowDoc request — reading, creating, updating, and deleting data. Whenever a task involves ShowDoc, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ShowDoc"
  author: "OOMOL"
  version: "1.0.0"
  services: ["showdoc"]
  icon: "https://static.oomol.com/logo/third-party/showdoc.png"
---

# ShowDoc

Operate **ShowDoc** through your OOMOL-connected account. This skill calls the `showdoc` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ShowDoc. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "showdoc" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "showdoc" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_catalog` — Create a ShowDoc catalog under the project root or a parent catalog. [write]
- `delete_attachment` — Delete an uploaded ShowDoc attachment by file ID, access signature, or attachment URL. [destructive]
- `delete_catalog` — Delete a ShowDoc catalog and all its subcatalogs, moving their pages to the recycle bin. [destructive]
- `delete_page` — Move a ShowDoc page to the recycle bin. [destructive]
- `get_catalog_tree` — Read the complete ShowDoc project catalog and page tree.
- `get_page` — Read a ShowDoc page by ID or title and decode one layer of HTML escaping in its content. Prefer ID when titles repeat across catalogs.
- `update_catalog` — Change a ShowDoc catalog name or display order. [write]
- `update_page` — Create or update a ShowDoc page by its title within a catalog, automatically creating the catalog path when needed. [write]
- `upload_attachment` — Download a file from a public URL and upload it to ShowDoc, optionally associating it with a page. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change ShowDoc state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ShowDoc is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/showdoc
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- ShowDoc homepage: https://www.showdoc.com.cn/
- API documentation: https://www.showdoc.com.cn/openapi
