---
name: oo-notion
description: "Notion (notion.so). Use this skill for ANY Notion request — reading, creating, updating, and deleting data. Whenever a task involves Notion, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Notion"
  author: "OOMOL"
  version: "1.0.0"
  service: "notion"
  categories: "Productivity"
  homepage: "https://www.notion.so"
  icon: "https://static.oomol.com/logo/third-party/Notion.svg"
---

# Notion

Operate **Notion** through your OOMOL-connected account. This skill calls the `notion` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 25 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Notion. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "notion" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "notion" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`append_block`](actions/append_block.md) — Append a single paragraph block to a Notion page. This is a simplified compatibility helper over `append_block_children`.
- [`append_block_children`](actions/append_block_children.md) — Append raw Notion child blocks to an existing parent block, using the official block-children append API.
- [`create_data_source`](actions/create_data_source.md) — Create a Notion data source under a parent database with a properties schema.
- [`create_database`](actions/create_database.md) — Create a Notion database container under a parent page or workspace, optionally with an initial data source.
- [`create_page`](actions/create_page.md) — Create a Notion page under a parent page, data source, or workspace-level private area. Use parentId + title for a simple child page under an existing page. Use parent with an official Notion parent payload for advanced cases: { page_id: "..." }, { data_source_id: "..." }, or { workspace: true } for OAuth public integrations. When parent is provided, do not use the top-level title field; provide the page title through properties.title instead. Internal integration secrets usually cannot create workspace-level private pages and should use a parent page or data source.
- [`delete_block`](actions/delete_block.md) — Archive a Notion block through the official delete endpoint.
- [`get_page`](actions/get_page.md) — Get a Notion page together with its first-level child blocks. This is a repo-level aggregate helper over page retrieval plus block-children listing.
- [`list_block_children`](actions/list_block_children.md) — List the direct child blocks under a Notion block with pagination.
- [`list_data_source_templates`](actions/list_data_source_templates.md) — List templates available on a Notion data source.
- [`list_users`](actions/list_users.md) — List users in the Notion workspace with pagination.
- [`move_page`](actions/move_page.md) — Move a Notion page under another page or under a data source through the official page move API.
- [`query_data_source`](actions/query_data_source.md) — Query a Notion data source with filters, sorts, pagination, and optional property filtering.
- [`retrieve_block`](actions/retrieve_block.md) — Retrieve a Notion block by block ID.
- [`retrieve_data_source`](actions/retrieve_data_source.md) — Retrieve a Notion data source by data source ID.
- [`retrieve_database`](actions/retrieve_database.md) — Retrieve a Notion database's metadata and schema by database ID.
- [`retrieve_page`](actions/retrieve_page.md) — Retrieve a Notion page's properties and metadata by page ID. This does not include child block content.
- [`retrieve_page_markdown`](actions/retrieve_page_markdown.md) — Retrieve a Notion page or block subtree rendered as enhanced Markdown through the official page markdown API.
- [`retrieve_page_property`](actions/retrieve_page_property.md) — Retrieve a specific property item from a Notion page by page ID and property ID. Title, rich_text, relation, and people properties return the paginated list response with type property_item.
- [`retrieve_user`](actions/retrieve_user.md) — Retrieve a Notion user by user ID.
- [`search`](actions/search.md) — Search Notion pages and data sources with optional filter, sort, and pagination controls.
- [`update_block`](actions/update_block.md) — Update a Notion block using raw block fields, including block-type payloads and optional trash state.
- [`update_data_source`](actions/update_data_source.md) — Update a Notion data source's title, icon, properties schema, parent, or trash status.
- [`update_database`](actions/update_database.md) — Update a Notion database container's parent, title, description, icon, cover, inline display, trash status, or locked state.
- [`update_page`](actions/update_page.md) — Update a Notion page's properties, title, icon, cover, trash status, or locked state.
- [`update_page_markdown`](actions/update_page_markdown.md) — Update a Notion page's content as enhanced Markdown through the official page markdown API.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Notion state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Notion is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=notion
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Notion homepage: https://www.notion.so
