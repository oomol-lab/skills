# TaxJar · `list_customers`

List TaxJar customer identifiers.

- **Service**: `taxjar`
- **Action**: `list_customers`
- **Action id**: `taxjar.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "list_customers"
```

## Run

```bash
oo connector run "taxjar" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
