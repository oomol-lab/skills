# Cal.com · `reassign_booking_with_uid`

Reassign a round-robin booking to a specific host user ID.

- **Service**: `cal`
- **Action**: `reassign_booking_with_uid`
- **Action id**: `cal.reassign_booking_with_uid`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "reassign_booking_with_uid"
```

## Run

```bash
oo connector run "cal" --action "reassign_booking_with_uid" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
