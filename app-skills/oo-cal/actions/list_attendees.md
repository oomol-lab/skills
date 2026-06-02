# Cal.com · `list_attendees`

List attendees for a Cal.com booking by booking UID.

- **Service**: `cal`
- **Action**: `list_attendees`
- **Action id**: `cal.list_attendees`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "list_attendees"
```

## Run

```bash
oo connector run "cal" --action "list_attendees" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
