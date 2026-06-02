# Google Calendar · `find_event`

Search events in a Google Calendar using a query string.

- **Service**: `googlecalendar`
- **Action**: `find_event`
- **Action id**: `googlecalendar.find_event`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "find_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "find_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
