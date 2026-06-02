# Gumroad · `list_sales`

List successful Gumroad sales with optional filters and pagination.

- **Service**: `gumroad`
- **Action**: `list_sales`
- **Action id**: `gumroad.list_sales`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "list_sales"
```

## Run

```bash
oo connector run "gumroad" --action "list_sales" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
