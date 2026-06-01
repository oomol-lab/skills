# Google Sheets · `search_spreadsheets`

Search Google Sheets files in Drive with spreadsheet-only filters and normalized summary output.

- **Service**: `googlesheets`
- **Action**: `search_spreadsheets`
- **Action id**: `googlesheets.search_spreadsheets`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "search_spreadsheets"
```

## Run

```bash
oo connector run "googlesheets" --action "search_spreadsheets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
