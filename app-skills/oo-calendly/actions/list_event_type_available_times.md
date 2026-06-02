# Calendly · `list_event_type_available_times`

List available time slots for one Calendly event type within a 7-day window.

- **Service**: `calendly`
- **Action**: `list_event_type_available_times`
- **Action id**: `calendly.list_event_type_available_times`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_event_type_available_times"
```

## Run

```bash
oo connector run "calendly" --action "list_event_type_available_times" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
