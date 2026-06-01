# Google Sheets · `batch_update_values_by_data_filter`

Write spreadsheet values through values.batchUpdateByDataFilter and return stable aggregate counters.

- **Service**: `googlesheets`
- **Action**: `batch_update_values_by_data_filter`
- **Action id**: `googlesheets.batch_update_values_by_data_filter`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "batch_update_values_by_data_filter"
```

## Run

```bash
oo connector run "googlesheets" --action "batch_update_values_by_data_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.
