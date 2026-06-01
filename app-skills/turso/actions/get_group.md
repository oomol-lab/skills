# Turso · `get_group`

Retrieve one Turso group by name within an organization.

- **Service**: `turso`
- **Action**: `get_group`
- **Action id**: `turso.get_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "get_group"
```

## Run

```bash
oo connector run "turso" --action "get_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
