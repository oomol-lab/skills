# Lemon Squeezy · `retrieve_store`

Retrieve a single Lemon Squeezy store by ID.

- **Service**: `lemon_squeezy`
- **Action**: `retrieve_store`
- **Action id**: `lemon_squeezy.retrieve_store`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "retrieve_store"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "retrieve_store" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
