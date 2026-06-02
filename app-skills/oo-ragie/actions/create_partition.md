# Ragie · `create_partition`

Create a Ragie partition to isolate documents, metadata schemas, and resource limits by workspace or tenant.

- **Service**: `ragie`
- **Action**: `create_partition`
- **Action id**: `ragie.create_partition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "create_partition"
```

## Run

```bash
oo connector run "ragie" --action "create_partition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
