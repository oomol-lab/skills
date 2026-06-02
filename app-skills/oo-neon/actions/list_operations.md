# Neon · `list_operations`

List operations for a Neon project.

- **Service**: `neon`
- **Action**: `list_operations`
- **Action id**: `neon.list_operations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "list_operations"
```

## Run

```bash
oo connector run "neon" --action "list_operations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
