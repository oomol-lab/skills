# Sendbird · `get_number_of_channels_by_join_status`

Get Sendbird group channel counts grouped by join status.

- **Service**: `sendbird`
- **Action**: `get_number_of_channels_by_join_status`
- **Action id**: `sendbird.get_number_of_channels_by_join_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "get_number_of_channels_by_join_status"
```

## Run

```bash
oo connector run "sendbird" --action "get_number_of_channels_by_join_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
