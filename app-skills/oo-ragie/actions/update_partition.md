# Ragie · `update_partition`

Update a Ragie partition's description, metadata schema, and context-aware setting without recreating it.

- **Service**: `ragie`
- **Action**: `update_partition`
- **Action id**: `ragie.update_partition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "update_partition"
```

## Run

```bash
oo connector run "ragie" --action "update_partition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
