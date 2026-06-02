# Ragie · `set_partition_limits`

Update the page, media, audio, and video limits on an existing Ragie partition.

- **Service**: `ragie`
- **Action**: `set_partition_limits`
- **Action id**: `ragie.set_partition_limits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "set_partition_limits"
```

## Run

```bash
oo connector run "ragie" --action "set_partition_limits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
