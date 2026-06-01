# Google Sheets · `lookup_spreadsheet_row`

Find the first row where a cell exactly matches the query and return a stable found/rowData payload.

- **Service**: `googlesheets`
- **Action**: `lookup_spreadsheet_row`
- **Action id**: `googlesheets.lookup_spreadsheet_row`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "lookup_spreadsheet_row"
```

## Run

```bash
oo connector run "googlesheets" --action "lookup_spreadsheet_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
