# Elorus · `list_invoices`

List Elorus invoices with optional filters and pagination.

- **Service**: `elorus`
- **Action**: `list_invoices`
- **Action id**: `elorus.list_invoices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "list_invoices"
```

## Run

```bash
oo connector run "elorus" --action "list_invoices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
