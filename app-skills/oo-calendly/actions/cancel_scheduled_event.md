# Calendly · `cancel_scheduled_event`

Cancel one Calendly scheduled event by scheduled-event URI.

- **Service**: `calendly`
- **Action**: `cancel_scheduled_event`
- **Action id**: `calendly.cancel_scheduled_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "cancel_scheduled_event"
```

## Run

```bash
oo connector run "calendly" --action "cancel_scheduled_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
