# Cal.com · `cancel_booking_via_uid`

Compatibility alias for Composio's cancel-booking-via-uid action. Cancels a booking by UID.

- **Service**: `cal`
- **Action**: `cancel_booking_via_uid`
- **Action id**: `cal.cancel_booking_via_uid`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "cancel_booking_via_uid"
```

## Run

```bash
oo connector run "cal" --action "cancel_booking_via_uid" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
