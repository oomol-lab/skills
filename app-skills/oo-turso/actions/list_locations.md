# Turso · `list_locations`

List available Turso locations that can host groups.

- **Service**: `turso`
- **Action**: `list_locations`
- **Action id**: `turso.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "list_locations"
```

## Run

```bash
oo connector run "turso" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
