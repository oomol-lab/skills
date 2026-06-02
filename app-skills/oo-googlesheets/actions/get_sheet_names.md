# Google Sheets · `get_sheet_names`

List visible or all sheet names from a spreadsheet and include a stable name-to-sheetId map.

- **Service**: `googlesheets`
- **Action**: `get_sheet_names`
- **Action id**: `googlesheets.get_sheet_names`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "get_sheet_names"
```

## Run

```bash
oo connector run "googlesheets" --action "get_sheet_names" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
