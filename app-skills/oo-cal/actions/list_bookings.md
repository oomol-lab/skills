# Cal.com · `list_bookings`

List bookings for the authenticated Cal.com user with optional date, attendee, and event-type filters.

- **Service**: `cal`
- **Action**: `list_bookings`
- **Action id**: `cal.list_bookings`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "list_bookings"
```

## Run

```bash
oo connector run "cal" --action "list_bookings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
