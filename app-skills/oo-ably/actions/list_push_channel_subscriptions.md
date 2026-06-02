# Ably · `list_push_channel_subscriptions`

List Ably push notification channel subscriptions.

- **Service**: `ably`
- **Action**: `list_push_channel_subscriptions`
- **Action id**: `ably.list_push_channel_subscriptions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "list_push_channel_subscriptions"
```

## Run

```bash
oo connector run "ably" --action "list_push_channel_subscriptions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
