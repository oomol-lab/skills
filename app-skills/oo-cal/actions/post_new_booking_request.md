# Cal.com · `post_new_booking_request`

Compatibility alias for Composio's post-new-booking-request action. Creates a booking.

- **Service**: `cal`
- **Action**: `post_new_booking_request`
- **Action id**: `cal.post_new_booking_request`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "post_new_booking_request"
```

## Run

```bash
oo connector run "cal" --action "post_new_booking_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
