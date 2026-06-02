# Google Sheets · `spreadsheets_values_batch_get_by_data_filter`

Read spreadsheet values through values:batchGetByDataFilter and return matched value ranges with their filters.

- **Service**: `googlesheets`
- **Action**: `spreadsheets_values_batch_get_by_data_filter`
- **Action id**: `googlesheets.spreadsheets_values_batch_get_by_data_filter`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "spreadsheets_values_batch_get_by_data_filter"
```

## Run

```bash
oo connector run "googlesheets" --action "spreadsheets_values_batch_get_by_data_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
