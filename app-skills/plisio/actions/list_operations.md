# Plisio · `list_operations`

List Plisio operations and invoices with official pagination, type, status, currency, and search filters.

- **Service**: `plisio`
- **Action**: `list_operations`
- **Action id**: `plisio.list_operations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plisio" --action "list_operations"
```

## Run

```bash
oo connector run "plisio" --action "list_operations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
