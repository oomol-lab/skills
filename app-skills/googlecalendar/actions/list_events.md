# Google Calendar · `list_events`

List events from a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `list_events`
- **Action id**: `googlecalendar.list_events`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_events"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
