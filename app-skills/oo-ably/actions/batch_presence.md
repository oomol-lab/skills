# Ably · `batch_presence`

Query current presence for multiple Ably channels.

- **Service**: `ably`
- **Action**: `batch_presence`
- **Action id**: `ably.batch_presence`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "batch_presence"
```

## Run

```bash
oo connector run "ably" --action "batch_presence" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
