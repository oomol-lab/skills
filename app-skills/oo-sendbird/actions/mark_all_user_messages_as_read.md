# Sendbird · `mark_all_user_messages_as_read`

Mark all messages as read for a Sendbird user.

- **Service**: `sendbird`
- **Action**: `mark_all_user_messages_as_read`
- **Action id**: `sendbird.mark_all_user_messages_as_read`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "mark_all_user_messages_as_read"
```

## Run

```bash
oo connector run "sendbird" --action "mark_all_user_messages_as_read" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
