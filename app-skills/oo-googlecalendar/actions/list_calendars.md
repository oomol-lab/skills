# Google Calendar · `list_calendars`

List the current user's Google Calendar list entries.

- **Service**: `googlecalendar`
- **Action**: `list_calendars`
- **Action id**: `googlecalendar.list_calendars`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_calendars"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_calendars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
