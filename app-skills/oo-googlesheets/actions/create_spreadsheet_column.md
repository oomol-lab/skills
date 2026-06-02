# Google Sheets · `create_spreadsheet_column`

Insert an empty column into a sheet through spreadsheets.batchUpdate with stable top-level fields.

- **Service**: `googlesheets`
- **Action**: `create_spreadsheet_column`
- **Action id**: `googlesheets.create_spreadsheet_column`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "create_spreadsheet_column"
```

## Run

```bash
oo connector run "googlesheets" --action "create_spreadsheet_column" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.
