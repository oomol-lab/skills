# Baserow · `get_table_row`

Read one Baserow row by table ID and row ID.

- **Service**: `baserow`
- **Action**: `get_table_row`
- **Action id**: `baserow.get_table_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "baserow" --action "get_table_row"
```

## Run

```bash
oo connector run "baserow" --action "get_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
