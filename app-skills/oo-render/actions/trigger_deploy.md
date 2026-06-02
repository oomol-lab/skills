# Render · `trigger_deploy`

Trigger a new deploy for a Render service.

- **Service**: `render`
- **Action**: `trigger_deploy`
- **Action id**: `render.trigger_deploy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "trigger_deploy"
```

## Run

```bash
oo connector run "render" --action "trigger_deploy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Render state. Confirm the exact payload and intended effect with the user before running.
