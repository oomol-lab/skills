# Everhour · `create_time_record`

Create one Everhour time record with a duration, date, and optional task or user assignment.

- **Service**: `everhour`
- **Action**: `create_time_record`
- **Action id**: `everhour.create_time_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "create_time_record"
```

## Run

```bash
oo connector run "everhour" --action "create_time_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Everhour state. Confirm the exact payload and intended effect with the user before running.
