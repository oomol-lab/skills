# OneSignal · `get_message`

Retrieve one OneSignal message by id from the connected app.

- **Service**: `onesignal_rest_api`
- **Action**: `get_message`
- **Action id**: `onesignal_rest_api.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "onesignal_rest_api" --action "get_message"
```

## Run

```bash
oo connector run "onesignal_rest_api" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
