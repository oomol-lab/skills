# Google Sheets · `get_spreadsheet_info`

Read spreadsheet metadata through spreadsheets.get with optional ranges and grid data flags.

- **Service**: `googlesheets`
- **Action**: `get_spreadsheet_info`
- **Action id**: `googlesheets.get_spreadsheet_info`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "get_spreadsheet_info"
```

## Run

```bash
oo connector run "googlesheets" --action "get_spreadsheet_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
