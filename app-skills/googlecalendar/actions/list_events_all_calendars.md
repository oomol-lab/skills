# Google Calendar · `list_events_all_calendars`

List events across multiple Google Calendars and aggregate the result.

- **Service**: `googlecalendar`
- **Action**: `list_events_all_calendars`
- **Action id**: `googlecalendar.list_events_all_calendars`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_events_all_calendars"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_events_all_calendars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
