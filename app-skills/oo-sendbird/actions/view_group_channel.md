# Sendbird · `view_group_channel`

Get a Sendbird group channel by channel URL.

- **Service**: `sendbird`
- **Action**: `view_group_channel`
- **Action id**: `sendbird.view_group_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "view_group_channel"
```

## Run

```bash
oo connector run "sendbird" --action "view_group_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
