# Ably · `delete_channel_subscription`

Delete an Ably push notification subscription for a channel, device, or client.

- **Service**: `ably`
- **Action**: `delete_channel_subscription`
- **Action id**: `ably.delete_channel_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "delete_channel_subscription"
```

## Run

```bash
oo connector run "ably" --action "delete_channel_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Ably data. Always confirm the target and get explicit user approval before running.
