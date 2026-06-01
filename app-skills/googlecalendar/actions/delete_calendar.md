# Google Calendar · `delete_calendar`

Delete a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `delete_calendar`
- **Action id**: `googlecalendar.delete_calendar`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "delete_calendar"
```

## Run

```bash
oo connector run "googlecalendar" --action "delete_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
