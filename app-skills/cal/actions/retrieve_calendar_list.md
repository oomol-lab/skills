# Cal.com · `retrieve_calendar_list`

Compatibility alias for Composio's retrieve-calendar-list action. Lists connected calendars and the selected destination calendar.

- **Service**: `cal`
- **Action**: `retrieve_calendar_list`
- **Action id**: `cal.retrieve_calendar_list`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "retrieve_calendar_list"
```

## Run

```bash
oo connector run "cal" --action "retrieve_calendar_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
