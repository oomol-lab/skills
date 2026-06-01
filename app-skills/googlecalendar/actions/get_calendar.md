# Google Calendar · `get_calendar`

Fetch one Google Calendar resource by ID.

- **Service**: `googlecalendar`
- **Action**: `get_calendar`
- **Action id**: `googlecalendar.get_calendar`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_calendar"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
