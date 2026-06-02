# Cal.com · `list_booking_references`

List booking references for a Cal.com booking.

- **Service**: `cal`
- **Action**: `list_booking_references`
- **Action id**: `cal.list_booking_references`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "list_booking_references"
```

## Run

```bash
oo connector run "cal" --action "list_booking_references" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
