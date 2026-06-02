# Sendbird · `leave_group_channels`

Make a Sendbird user leave one or more joined group channels.

- **Service**: `sendbird`
- **Action**: `leave_group_channels`
- **Action id**: `sendbird.leave_group_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "leave_group_channels"
```

## Run

```bash
oo connector run "sendbird" --action "leave_group_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
