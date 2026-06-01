# Google Calendar · `create_calendar`

Create a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `create_calendar`
- **Action id**: `googlecalendar.create_calendar`
- **Required scopes**: googlecalendar.calendars.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "create_calendar"
```

## Run

```bash
oo connector run "googlecalendar" --action "create_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
