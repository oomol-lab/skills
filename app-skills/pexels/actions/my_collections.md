# Pexels · `my_collections`

Retrieve collections owned by the authenticated Pexels account.

- **Service**: `pexels`
- **Action**: `my_collections`
- **Action id**: `pexels.my_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "my_collections"
```

## Run

```bash
oo connector run "pexels" --action "my_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
