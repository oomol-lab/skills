# Google Calendar · `update_calendar_list_entry`

Replace writable fields on a Google Calendar list entry.

- **Service**: `googlecalendar`
- **Action**: `update_calendar_list_entry`
- **Action id**: `googlecalendar.update_calendar_list_entry`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "update_calendar_list_entry"
```

## Run

```bash
oo connector run "googlecalendar" --action "update_calendar_list_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
