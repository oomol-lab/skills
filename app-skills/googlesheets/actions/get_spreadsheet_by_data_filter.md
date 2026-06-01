# Google Sheets · `get_spreadsheet_by_data_filter`

Read spreadsheet metadata through spreadsheets.getByDataFilter and return the normalized spreadsheet payload.

- **Service**: `googlesheets`
- **Action**: `get_spreadsheet_by_data_filter`
- **Action id**: `googlesheets.get_spreadsheet_by_data_filter`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "get_spreadsheet_by_data_filter"
```

## Run

```bash
oo connector run "googlesheets" --action "get_spreadsheet_by_data_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
