# Calendly · `list_event_type_availability_schedules`

List the official Calendly availability schedules attached to one event type.

- **Service**: `calendly`
- **Action**: `list_event_type_availability_schedules`
- **Action id**: `calendly.list_event_type_availability_schedules`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_event_type_availability_schedules"
```

## Run

```bash
oo connector run "calendly" --action "list_event_type_availability_schedules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
