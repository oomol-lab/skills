# Google Sheets · `batch_clear_values_by_data_filter`

Clear spreadsheet values through values.batchClearByDataFilter and return the cleared ranges.

- **Service**: `googlesheets`
- **Action**: `batch_clear_values_by_data_filter`
- **Action id**: `googlesheets.batch_clear_values_by_data_filter`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "batch_clear_values_by_data_filter"
```

## Run

```bash
oo connector run "googlesheets" --action "batch_clear_values_by_data_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Sheets data. Always confirm the target and get explicit user approval before running.
