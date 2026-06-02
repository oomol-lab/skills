# Ably · `get_presence_history`

Retrieve presence history for one Ably channel.

- **Service**: `ably`
- **Action**: `get_presence_history`
- **Action id**: `ably.get_presence_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "get_presence_history"
```

## Run

```bash
oo connector run "ably" --action "get_presence_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
