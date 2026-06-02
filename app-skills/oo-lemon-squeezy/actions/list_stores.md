# Lemon Squeezy · `list_stores`

List stores that belong to the authenticated Lemon Squeezy account.

- **Service**: `lemon_squeezy`
- **Action**: `list_stores`
- **Action id**: `lemon_squeezy.list_stores`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_stores"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_stores" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
