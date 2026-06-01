# Ably · `get_channel_details`

Retrieve Ably metadata and occupancy details for one channel.

- **Service**: `ably`
- **Action**: `get_channel_details`
- **Action id**: `ably.get_channel_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "get_channel_details"
```

## Run

```bash
oo connector run "ably" --action "get_channel_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
