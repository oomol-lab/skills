# Sendbird · `list_members_group_channel`

List members of a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `list_members_group_channel`
- **Action id**: `sendbird.list_members_group_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "list_members_group_channel"
```

## Run

```bash
oo connector run "sendbird" --action "list_members_group_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
