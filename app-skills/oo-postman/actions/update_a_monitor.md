# Postman · `update_a_monitor`

Tool to update an existing monitor in Postman. Use when you need to modify monitor properties like name, active status, collection, environment, options, notifications, or distribution settings.

- **Service**: `postman`
- **Action**: `update_a_monitor`
- **Action id**: `postman.update_a_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_monitor"
```

## Run

```bash
oo connector run "postman" --action "update_a_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
