# Cal.com · `mark_booking_absent_for_uid`

Mark a Cal.com booking host or attendees absent.

- **Service**: `cal`
- **Action**: `mark_booking_absent_for_uid`
- **Action id**: `cal.mark_booking_absent_for_uid`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "mark_booking_absent_for_uid"
```

## Run

```bash
oo connector run "cal" --action "mark_booking_absent_for_uid" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
