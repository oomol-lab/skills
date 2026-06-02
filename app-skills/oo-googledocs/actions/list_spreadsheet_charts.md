# Google Docs · `list_spreadsheet_charts`

List chart metadata from a Google Sheets spreadsheet so charts can be referenced or embedded elsewhere, including in Google Docs.

- **Service**: `googledocs`
- **Action**: `list_spreadsheet_charts`
- **Action id**: `googledocs.list_spreadsheet_charts`
- **Required scopes**: googledocs.sheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "list_spreadsheet_charts"
```

## Run

```bash
oo connector run "googledocs" --action "list_spreadsheet_charts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
