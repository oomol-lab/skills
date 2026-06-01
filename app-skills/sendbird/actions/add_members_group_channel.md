# Sendbird · `add_members_group_channel`

Invite members into an existing Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `add_members_group_channel`
- **Action id**: `sendbird.add_members_group_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "add_members_group_channel"
```

## Run

```bash
oo connector run "sendbird" --action "add_members_group_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
