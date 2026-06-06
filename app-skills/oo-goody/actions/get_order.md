# Goody · `get_order`

Retrieve a Goody order by ID.

- **Service**: `goody`
- **Action**: `get_order`
- **Action id**: `goody.get_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "get_order"
```

## Run

```bash
oo connector run "goody" --action "get_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
