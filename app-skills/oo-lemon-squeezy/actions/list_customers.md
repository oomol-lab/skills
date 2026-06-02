# Lemon Squeezy · `list_customers`

List Lemon Squeezy customers with optional store or email filtering.

- **Service**: `lemon_squeezy`
- **Action**: `list_customers`
- **Action id**: `lemon_squeezy.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_customers"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
