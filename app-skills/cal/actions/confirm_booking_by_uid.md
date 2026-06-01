# Cal.com · `confirm_booking_by_uid`

Confirm a Cal.com booking by UID.

- **Service**: `cal`
- **Action**: `confirm_booking_by_uid`
- **Action id**: `cal.confirm_booking_by_uid`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "confirm_booking_by_uid"
```

## Run

```bash
oo connector run "cal" --action "confirm_booking_by_uid" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
