# Calendly · `update_event_type_availability_schedule`

Update the official Calendly availability schedule for one event type.

- **Service**: `calendly`
- **Action**: `update_event_type_availability_schedule`
- **Action id**: `calendly.update_event_type_availability_schedule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "update_event_type_availability_schedule"
```

## Run

```bash
oo connector run "calendly" --action "update_event_type_availability_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
