# Neon · `update_database`

Update a Neon database name or owner.

- **Service**: `neon`
- **Action**: `update_database`
- **Action id**: `neon.update_database`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "update_database"
```

## Run

```bash
oo connector run "neon" --action "update_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Neon state. Confirm the exact payload and intended effect with the user before running.
