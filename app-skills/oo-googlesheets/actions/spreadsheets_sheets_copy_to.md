# Google Sheets · `spreadsheets_sheets_copy_to`

Copy a sheet to another spreadsheet through sheets.copyTo and return a stable copiedSheet payload.

- **Service**: `googlesheets`
- **Action**: `spreadsheets_sheets_copy_to`
- **Action id**: `googlesheets.spreadsheets_sheets_copy_to`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "spreadsheets_sheets_copy_to"
```

## Run

```bash
oo connector run "googlesheets" --action "spreadsheets_sheets_copy_to" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.
