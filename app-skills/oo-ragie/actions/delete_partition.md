# Ragie · `delete_partition`

Delete a Ragie partition, optionally in asynchronous mode.

- **Service**: `ragie`
- **Action**: `delete_partition`
- **Action id**: `ragie.delete_partition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "delete_partition"
```

## Run

```bash
oo connector run "ragie" --action "delete_partition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Ragie data. Always confirm the target and get explicit user approval before running.
