# OneSignal · `create_push_notification`

Create a push notification for the connected OneSignal app using one official targeting method.

- **Service**: `onesignal_rest_api`
- **Action**: `create_push_notification`
- **Action id**: `onesignal_rest_api.create_push_notification`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "onesignal_rest_api" --action "create_push_notification"
```

## Run

```bash
oo connector run "onesignal_rest_api" --action "create_push_notification" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OneSignal state. Confirm the exact payload and intended effect with the user before running.
