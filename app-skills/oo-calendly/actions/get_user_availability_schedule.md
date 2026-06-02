# Calendly · `get_user_availability_schedule`

Retrieve one Calendly user availability schedule by schedule URI.

- **Service**: `calendly`
- **Action**: `get_user_availability_schedule`
- **Action id**: `calendly.get_user_availability_schedule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_user_availability_schedule"
```

## Run

```bash
oo connector run "calendly" --action "get_user_availability_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
