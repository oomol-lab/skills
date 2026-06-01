# OneSignal · `cancel_message`

Cancel one scheduled OneSignal message by id.

- **Service**: `onesignal_rest_api`
- **Action**: `cancel_message`
- **Action id**: `onesignal_rest_api.cancel_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "onesignal_rest_api" --action "cancel_message"
```

## Run

```bash
oo connector run "onesignal_rest_api" --action "cancel_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
