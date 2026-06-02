# Lemon Squeezy · `list_variants`

List Lemon Squeezy variants with optional product filtering and pagination.

- **Service**: `lemon_squeezy`
- **Action**: `list_variants`
- **Action id**: `lemon_squeezy.list_variants`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_variants"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_variants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
