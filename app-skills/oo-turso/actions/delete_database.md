# Turso · `delete_database`

Delete a Turso database from one organization.

- **Service**: `turso`
- **Action**: `delete_database`
- **Action id**: `turso.delete_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "delete_database"
```

## Run

```bash
oo connector run "turso" --action "delete_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Turso data. Always confirm the target and get explicit user approval before running.
