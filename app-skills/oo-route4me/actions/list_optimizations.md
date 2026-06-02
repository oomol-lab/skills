# Route4Me · `list_optimizations`

List Route4Me optimization problems, or fetch one optimization by its ID.

- **Service**: `route4me`
- **Action**: `list_optimizations`
- **Action id**: `route4me.list_optimizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "route4me" --action "list_optimizations"
```

## Run

```bash
oo connector run "route4me" --action "list_optimizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
