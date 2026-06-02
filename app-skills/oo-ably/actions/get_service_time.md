# Ably · `get_service_time`

Retrieve Ably service time in milliseconds since the Unix epoch.

- **Service**: `ably`
- **Action**: `get_service_time`
- **Action id**: `ably.get_service_time`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "get_service_time"
```

## Run

```bash
oo connector run "ably" --action "get_service_time" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
