# Google Calendar · `get_calendar_list_entry`

Fetch one Google Calendar list entry by calendar ID.

- **Service**: `googlecalendar`
- **Action**: `get_calendar_list_entry`
- **Action id**: `googlecalendar.get_calendar_list_entry`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_calendar_list_entry"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_calendar_list_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
