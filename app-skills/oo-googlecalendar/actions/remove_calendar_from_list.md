# Google Calendar · `remove_calendar_from_list`

Remove a calendar from the current user's Calendar list.

- **Service**: `googlecalendar`
- **Action**: `remove_calendar_from_list`
- **Action id**: `googlecalendar.remove_calendar_from_list`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "remove_calendar_from_list"
```

## Run

```bash
oo connector run "googlecalendar" --action "remove_calendar_from_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
