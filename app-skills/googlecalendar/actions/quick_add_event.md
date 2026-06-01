# Google Calendar · `quick_add_event`

Create a Google Calendar event with natural language text.

- **Service**: `googlecalendar`
- **Action**: `quick_add_event`
- **Action id**: `googlecalendar.quick_add_event`
- **Required scopes**: googlecalendar.events.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "quick_add_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "quick_add_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
