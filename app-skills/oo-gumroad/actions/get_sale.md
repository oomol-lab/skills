# Gumroad · `get_sale`

Retrieve one Gumroad sale by ID.

- **Service**: `gumroad`
- **Action**: `get_sale`
- **Action id**: `gumroad.get_sale`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "get_sale"
```

## Run

```bash
oo connector run "gumroad" --action "get_sale" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
