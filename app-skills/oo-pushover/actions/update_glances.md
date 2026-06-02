# Pushover · `update_glances`

Update Pushover Glances widget data for a user without creating a push notification.

- **Service**: `pushover`
- **Action**: `update_glances`
- **Action id**: `pushover.update_glances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "update_glances"
```

## Run

```bash
oo connector run "pushover" --action "update_glances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
