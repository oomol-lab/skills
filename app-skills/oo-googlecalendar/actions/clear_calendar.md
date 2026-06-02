# Google Calendar · `clear_calendar`

Clear all events from a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `clear_calendar`
- **Action id**: `googlecalendar.clear_calendar`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "clear_calendar"
```

## Run

```bash
oo connector run "googlecalendar" --action "clear_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
