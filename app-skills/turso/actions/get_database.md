# Turso · `get_database`

Retrieve one Turso database by name within an organization.

- **Service**: `turso`
- **Action**: `get_database`
- **Action id**: `turso.get_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "get_database"
```

## Run

```bash
oo connector run "turso" --action "get_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
