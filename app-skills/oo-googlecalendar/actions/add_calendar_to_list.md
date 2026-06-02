# Google Calendar · `add_calendar_to_list`

Add a calendar to the current user's Google Calendar list.

- **Service**: `googlecalendar`
- **Action**: `add_calendar_to_list`
- **Action id**: `googlecalendar.add_calendar_to_list`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "add_calendar_to_list"
```

## Run

```bash
oo connector run "googlecalendar" --action "add_calendar_to_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
