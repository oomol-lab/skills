# Cal.com · `retrieve_calendar_busy_times`

Compatibility alias for Composio's retrieve-calendar-busy-times action. Returns busy ranges for specific calendars.

- **Service**: `cal`
- **Action**: `retrieve_calendar_busy_times`
- **Action id**: `cal.retrieve_calendar_busy_times`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "retrieve_calendar_busy_times"
```

## Run

```bash
oo connector run "cal" --action "retrieve_calendar_busy_times" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
