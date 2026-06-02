---
name: oo-excel
description: "Excel (microsoft.com). Use this skill for ANY Excel request — reading, creating, updating, and deleting data. Whenever a task involves Excel, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Excel"
  author: "OOMOL"
  version: "1.0.0"
  service: "excel"
  categories: "Productivity, Data & Analytics"
  homepage: "https://www.microsoft.com/microsoft-365/excel"
  icon: "https://static.oomol.com/logo/third-party/excel.svg"
---

# Excel

Operate **Excel** through your OOMOL-connected account. This skill calls the `excel` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 31 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Excel. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "excel" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "excel" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_table`](actions/add_table.md) — Create a new workbook table from an address range.
- [`add_table_column`](actions/add_table_column.md) — Add one column to a workbook table.
- [`add_table_row`](actions/add_table_row.md) — Add one or more rows to a workbook table.
- [`add_worksheet`](actions/add_worksheet.md) — Add a new worksheet to a workbook.
- [`apply_table_filter`](actions/apply_table_filter.md) — Apply a Microsoft Graph filter criteria object to one table column.
- [`apply_table_sort`](actions/apply_table_sort.md) — Apply a Microsoft Graph sort definition to one workbook table.
- [`clear_range`](actions/clear_range.md) — Clear one worksheet range.
- [`clear_table_filter`](actions/clear_table_filter.md) — Clear the current Microsoft Graph filter on one table column.
- [`convert_table_to_range`](actions/convert_table_to_range.md) — Convert a workbook table back into a plain worksheet range.
- [`create_session`](actions/create_session.md) — Create an Excel workbook session for subsequent workbook operations.
- [`create_workbook`](actions/create_workbook.md) — Create a new .xlsx workbook file and optionally populate worksheets and data.
- [`delete_table_column`](actions/delete_table_column.md) — Delete one column from a workbook table.
- [`delete_table_row`](actions/delete_table_row.md) — Delete one row from a workbook table by row index.
- [`delete_worksheet`](actions/delete_worksheet.md) — Delete one worksheet from a workbook.
- [`get_range`](actions/get_range.md) — Read one worksheet range by A1-style address.
- [`get_table_column`](actions/get_table_column.md) — Read one workbook table column by column name or column ID.
- [`get_workbook`](actions/get_workbook.md) — Read workbook metadata and optionally expand related workbook resources.
- [`get_worksheet`](actions/get_worksheet.md) — Read a single worksheet by worksheet name or worksheet ID.
- [`get_worksheet_used_range`](actions/get_worksheet_used_range.md) — Read the used range for one worksheet.
- [`insert_range`](actions/insert_range.md) — Insert one worksheet range and shift existing cells to make space.
- [`list_drive_item_children`](actions/list_drive_item_children.md) — List direct child drive items for a folder or the drive root.
- [`list_table_columns`](actions/list_table_columns.md) — List columns for one workbook table.
- [`list_table_rows`](actions/list_table_rows.md) — List rows for one workbook table.
- [`list_tables`](actions/list_tables.md) — List workbook tables, optionally restricted to one worksheet.
- [`list_worksheets`](actions/list_worksheets.md) — List worksheets in a workbook.
- [`merge_cells`](actions/merge_cells.md) — Merge cells inside one worksheet range.
- [`search_files`](actions/search_files.md) — Search workbook files in the current OneDrive drive and return matching drive items.
- [`sort_range`](actions/sort_range.md) — Apply a Microsoft Graph sort definition to one worksheet range.
- [`update_range`](actions/update_range.md) — Update one worksheet range with values, formulas, formats, or visibility flags.
- [`update_table`](actions/update_table.md) — Update table metadata such as the name, style, or header flags.
- [`update_worksheet`](actions/update_worksheet.md) — Update worksheet metadata such as the name, position, or visibility.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Excel state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Excel is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=excel
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Excel homepage: https://www.microsoft.com/microsoft-365/excel
