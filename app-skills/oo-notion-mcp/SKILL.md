---
name: oo-notion-mcp
description: "Notion MCP (notion.so). Use this skill for ANY Notion MCP request — searching and reading data. Whenever a task involves Notion MCP, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Notion MCP"
  author: "OOMOL"
  version: "1.0.0"
  services: ["notion_mcp"]
  icon: "https://static.oomol.com/logo/third-party/notion_mcp.svg"
---

# Notion MCP

Operate **Notion MCP** through your OOMOL-connected account. This skill calls the `notion_mcp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Notion MCP. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "notion_mcp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "notion_mcp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `fetch_page` — Read one Notion page through notion-fetch by ID or URL. Returns the title, properties block, Markdown content, a truncated flag, and the raw response.
- `get_self` — Identify the connected Notion user through notion-get-users with user_id self. Returns the user ID, name, and email the server reports.
- `list_comments` — List the comments on one Notion page through notion-get-comments, flattened across discussions. Block-level and resolved discussions are included unless turned off; the server offers no paging.
- `search` — Search Notion pages through notion-search with optional text, sort, page size, date-range and creator filters. Returns typed results, the search type that ran, the server's notices about dropped filters, and the raw response. Filtering by editor or last-edited date and sorting by date need a Business or Enterprise plan; other plans drop them and name them in notices. When the connection can use AI search, a non-empty keyword query with no exact filter and relevance order runs AI search and can return results from connected apps. Notion allows 30 searches a minute.
- `tool_access` — Report each MCP tool's access status on the connected Notion plan through notion-get-tool-access, keyed by the tool's base name such as search, with the parameters the plan restricts and the reason for each, such as the edited-by search filter below the Business plan.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Notion MCP state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Notion MCP is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=notion_mcp
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Notion MCP homepage: https://www.notion.so
