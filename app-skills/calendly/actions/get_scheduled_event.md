# Calendly · `get_scheduled_event`

Retrieve one Calendly scheduled event by scheduled-event URI.

- **Service**: `calendly`
- **Action**: `get_scheduled_event`
- **Action id**: `calendly.get_scheduled_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_scheduled_event"
```

## Run

```bash
oo connector run "calendly" --action "get_scheduled_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
