# Ably · `get_stats`

Retrieve Ably application usage statistics.

- **Service**: `ably`
- **Action**: `get_stats`
- **Action id**: `ably.get_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "get_stats"
```

## Run

```bash
oo connector run "ably" --action "get_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
