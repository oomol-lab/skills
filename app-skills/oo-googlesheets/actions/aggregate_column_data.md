# Google Sheets · `aggregate_column_data`

Aggregate numeric values from a target column, optionally filtered by another column, with stable counters.

- **Service**: `googlesheets`
- **Action**: `aggregate_column_data`
- **Action id**: `googlesheets.aggregate_column_data`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "aggregate_column_data"
```

## Run

```bash
oo connector run "googlesheets" --action "aggregate_column_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
