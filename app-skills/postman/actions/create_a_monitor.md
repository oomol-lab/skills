# Postman · `create_a_monitor`

Tool to create a new monitor in a specific workspace to run a collection on a schedule. Use when you need to set up automated collection runs at specified intervals using cron expressions within a workspace.

- **Service**: `postman`
- **Action**: `create_a_monitor`
- **Action id**: `postman.create_a_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_monitor"
```

## Run

```bash
oo connector run "postman" --action "create_a_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
