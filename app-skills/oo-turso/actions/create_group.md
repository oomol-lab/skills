# Turso · `create_group`

Create a Turso group in one organization with a primary location.

- **Service**: `turso`
- **Action**: `create_group`
- **Action id**: `turso.create_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "create_group"
```

## Run

```bash
oo connector run "turso" --action "create_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Turso state. Confirm the exact payload and intended effect with the user before running.
