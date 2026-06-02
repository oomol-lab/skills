# Cal.com · `decline_booking_with_reason`

Decline a Cal.com booking by UID with an optional reason.

- **Service**: `cal`
- **Action**: `decline_booking_with_reason`
- **Action id**: `cal.decline_booking_with_reason`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "decline_booking_with_reason"
```

## Run

```bash
oo connector run "cal" --action "decline_booking_with_reason" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
