# Turso · `create_database`

Create a Turso database in one organization and group.

- **Service**: `turso`
- **Action**: `create_database`
- **Action id**: `turso.create_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "create_database"
```

## Run

```bash
oo connector run "turso" --action "create_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Turso state. Confirm the exact payload and intended effect with the user before running.
