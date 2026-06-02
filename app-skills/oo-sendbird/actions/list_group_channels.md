# Sendbird · `list_group_channels`

List Sendbird group channels in the application with common filtering controls.

- **Service**: `sendbird`
- **Action**: `list_group_channels`
- **Action id**: `sendbird.list_group_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "list_group_channels"
```

## Run

```bash
oo connector run "sendbird" --action "list_group_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
