# Google Calendar · `find_free_slots`

Derive free slots from Google Calendar freeBusy data.

- **Service**: `googlecalendar`
- **Action**: `find_free_slots`
- **Action id**: `googlecalendar.find_free_slots`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "find_free_slots"
```

## Run

```bash
oo connector run "googlecalendar" --action "find_free_slots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
