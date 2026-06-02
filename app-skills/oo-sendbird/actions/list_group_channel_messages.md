# Sendbird · `list_group_channel_messages`

List messages from a Sendbird group channel around a timestamp or message anchor.

- **Service**: `sendbird`
- **Action**: `list_group_channel_messages`
- **Action id**: `sendbird.list_group_channel_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "list_group_channel_messages"
```

## Run

```bash
oo connector run "sendbird" --action "list_group_channel_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
