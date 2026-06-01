# Neon · `delete_database`

Delete a database from a Neon branch.

- **Service**: `neon`
- **Action**: `delete_database`
- **Action id**: `neon.delete_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "delete_database"
```

## Run

```bash
oo connector run "neon" --action "delete_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Neon data. Always confirm the target and get explicit user approval before running.
