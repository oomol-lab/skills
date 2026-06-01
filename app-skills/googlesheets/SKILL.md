---
name: googlesheets
description: "Google Sheets (workspace.google.com). Use this skill for ANY Google Sheets request — reading, creating, updating, and deleting data. Whenever a task involves Google Sheets, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Sheets"
  author: "OOMOL"
  version: "1.0.0"
  service: "googlesheets"
  categories: "Productivity, Data & Analytics"
  homepage: "https://workspace.google.com/products/sheets/"
  icon: "https://static.oomol.com/logo/third-party/Google%20Sheets.svg"
---

# Google Sheets

Operate **Google Sheets** through your OOMOL-connected account. This skill calls the `googlesheets` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 40 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Sheets. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googlesheets" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googlesheets" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_sheet`](actions/add_sheet.md) — Add a new sheet through spreadsheets.batchUpdate and return stable batch replies.
- [`aggregate_column_data`](actions/aggregate_column_data.md) — Aggregate numeric values from a target column, optionally filtered by another column, with stable counters.
- [`append_dimension`](actions/append_dimension.md) — Append rows or columns through spreadsheets.batchUpdate and return stable batch replies.
- [`auto_resize_dimensions`](actions/auto_resize_dimensions.md) — Auto-resize rows or columns through spreadsheets.batchUpdate and return stable batch replies.
- [`batch_clear_values_by_data_filter`](actions/batch_clear_values_by_data_filter.md) — Clear spreadsheet values through values.batchClearByDataFilter and return the cleared ranges.
- [`batch_get`](actions/batch_get.md) — Read multiple spreadsheet ranges through values:batchGet and return stable valueRanges output.
- [`batch_update_values_by_data_filter`](actions/batch_update_values_by_data_filter.md) — Write spreadsheet values through values.batchUpdateByDataFilter and return stable aggregate counters.
- [`clear_basic_filter`](actions/clear_basic_filter.md) — Clear a basic filter through spreadsheets.batchUpdate and return stable batch replies.
- [`clear_values`](actions/clear_values.md) — Clear a single spreadsheet value range through values.clear and return the cleared A1 range.
- [`create_chart`](actions/create_chart.md) — Create a chart through spreadsheets.batchUpdate and return stable batch replies.
- [`create_google_sheet1`](actions/create_google_sheet1.md) — Create a Google Sheets spreadsheet and return stable spreadsheet metadata for the new file.
- [`create_spreadsheet_column`](actions/create_spreadsheet_column.md) — Insert an empty column into a sheet through spreadsheets.batchUpdate with stable top-level fields.
- [`create_spreadsheet_row`](actions/create_spreadsheet_row.md) — Insert an empty row into a sheet through spreadsheets.batchUpdate with stable top-level fields.
- [`delete_dimension`](actions/delete_dimension.md) — Delete rows or columns through spreadsheets.batchUpdate and return stable batch replies.
- [`delete_sheet`](actions/delete_sheet.md) — Delete a sheet through spreadsheets.batchUpdate and return stable batch replies.
- [`find_replace`](actions/find_replace.md) — Run find and replace through spreadsheets.batchUpdate and return stable batch replies.
- [`format_cell`](actions/format_cell.md) — Format cells through spreadsheets.batchUpdate and return stable batch replies.
- [`get_conditional_format_rules`](actions/get_conditional_format_rules.md) — Read spreadsheet conditional formatting rules and project them into a stable per-sheet structure.
- [`get_data_validation_rules`](actions/get_data_validation_rules.md) — Read spreadsheet data validation rules from the minimum necessary sheet ranges and return flattened rule entries.
- [`get_sheet_names`](actions/get_sheet_names.md) — List visible or all sheet names from a spreadsheet and include a stable name-to-sheetId map.
- [`get_spreadsheet_by_data_filter`](actions/get_spreadsheet_by_data_filter.md) — Read spreadsheet metadata through spreadsheets.getByDataFilter and return the normalized spreadsheet payload.
- [`get_spreadsheet_info`](actions/get_spreadsheet_info.md) — Read spreadsheet metadata through spreadsheets.get with optional ranges and grid data flags.
- [`insert_dimension`](actions/insert_dimension.md) — Insert rows or columns through spreadsheets.batchUpdate and return stable batch replies.
- [`lookup_spreadsheet_row`](actions/lookup_spreadsheet_row.md) — Find the first row where a cell exactly matches the query and return a stable found/rowData payload.
- [`mutate_conditional_format_rules`](actions/mutate_conditional_format_rules.md) — Mutate conditional format rules through spreadsheets.batchUpdate and return stable batch replies.
- [`search_developer_metadata`](actions/search_developer_metadata.md) — Search spreadsheet developer metadata via developerMetadata:search and return matched entries only.
- [`search_spreadsheets`](actions/search_spreadsheets.md) — Search Google Sheets files in Drive with spreadsheet-only filters and normalized summary output.
- [`set_basic_filter`](actions/set_basic_filter.md) — Set a basic filter through spreadsheets.batchUpdate and return stable batch replies.
- [`set_data_validation_rule`](actions/set_data_validation_rule.md) — Set or clear data validation through spreadsheets.batchUpdate and return stable batch replies.
- [`spreadsheets_sheets_copy_to`](actions/spreadsheets_sheets_copy_to.md) — Copy a sheet to another spreadsheet through sheets.copyTo and return a stable copiedSheet payload.
- [`spreadsheets_values_append`](actions/spreadsheets_values_append.md) — Append values through values.append and flatten the nested updates payload into stable top-level fields.
- [`spreadsheets_values_batch_clear`](actions/spreadsheets_values_batch_clear.md) — Clear multiple spreadsheet value ranges through values.batchClear and return cleared ranges only.
- [`spreadsheets_values_batch_get_by_data_filter`](actions/spreadsheets_values_batch_get_by_data_filter.md) — Read spreadsheet values through values:batchGetByDataFilter and return matched value ranges with their filters.
- [`update_dimension_properties`](actions/update_dimension_properties.md) — Update row or column properties through spreadsheets.batchUpdate and return stable batch replies.
- [`update_sheet_properties`](actions/update_sheet_properties.md) — Update a sheet's properties through spreadsheets.batchUpdate and return stable batch replies.
- [`update_spreadsheet_properties`](actions/update_spreadsheet_properties.md) — Update spreadsheet-level properties through spreadsheets.batchUpdate and return stable batch replies.
- [`update_values_batch`](actions/update_values_batch.md) — Write multiple spreadsheet value ranges through values.batchUpdate and return stable aggregate counters.
- [`upsert_rows`](actions/upsert_rows.md) — Upsert rows by key while preserving uncovered columns, adding missing headers when needed, and returning stable counters.
- [`values_get`](actions/values_get.md) — Read a single spreadsheet value range and return a stable ValueRange without a wrapper envelope.
- [`values_update`](actions/values_update.md) — Write a single spreadsheet value range through values.update and return stable update counters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Sheets state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Sheets is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googlesheets
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Sheets homepage: https://workspace.google.com/products/sheets/
