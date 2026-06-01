# Coda · `list_tables`

List tables in a Coda doc with pagination, optional sort order, and optional table-type filtering.

- **Service**: `coda`
- **Action**: `list_tables`
- **Action id**: `coda.list_tables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "list_tables"
```

## Run

```bash
oo connector run "coda" --action "list_tables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
