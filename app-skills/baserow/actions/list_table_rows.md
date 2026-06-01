# Baserow · `list_table_rows`

List rows from one Baserow table with optional search, ordering, filters, and pagination.

- **Service**: `baserow`
- **Action**: `list_table_rows`
- **Action id**: `baserow.list_table_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "baserow" --action "list_table_rows"
```

## Run

```bash
oo connector run "baserow" --action "list_table_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
