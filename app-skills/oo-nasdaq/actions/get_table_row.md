# Nasdaq Data Link · `get_table_row`

Query a Nasdaq Data Link datatable with a single filter column and normalize the returned rows into key-value objects.

- **Service**: `nasdaq`
- **Action**: `get_table_row`
- **Action id**: `nasdaq.get_table_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_table_row"
```

## Run

```bash
oo connector run "nasdaq" --action "get_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
