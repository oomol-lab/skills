# Google Calendar · `free_busy_query`

Query busy intervals for calendars and groups.

- **Service**: `googlecalendar`
- **Action**: `free_busy_query`
- **Action id**: `googlecalendar.free_busy_query`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "free_busy_query"
```

## Run

```bash
oo connector run "googlecalendar" --action "free_busy_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
