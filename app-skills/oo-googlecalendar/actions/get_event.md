# Google Calendar · `get_event`

Fetch one Google Calendar event.

- **Service**: `googlecalendar`
- **Action**: `get_event`
- **Action id**: `googlecalendar.get_event`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
