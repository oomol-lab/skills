# Neon · `get_operation`

Get detailed metadata for a Neon operation.

- **Service**: `neon`
- **Action**: `get_operation`
- **Action id**: `neon.get_operation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "get_operation"
```

## Run

```bash
oo connector run "neon" --action "get_operation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
