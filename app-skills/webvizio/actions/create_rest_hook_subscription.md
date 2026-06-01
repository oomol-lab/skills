# Webvizio · `create_rest_hook_subscription`

Subscribe a callback URL to one Webvizio REST Hook event so Webvizio can send outbound event notifications to your service.

- **Service**: `webvizio`
- **Action**: `create_rest_hook_subscription`
- **Action id**: `webvizio.create_rest_hook_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webvizio" --action "create_rest_hook_subscription"
```

## Run

```bash
oo connector run "webvizio" --action "create_rest_hook_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Webvizio state. Confirm the exact payload and intended effect with the user before running.
