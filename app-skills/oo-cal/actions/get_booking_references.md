# Cal.com · `get_booking_references`

Compatibility alias for Composio's get-booking-references action. Lists booking references.

- **Service**: `cal`
- **Action**: `get_booking_references`
- **Action id**: `cal.get_booking_references`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_booking_references"
```

## Run

```bash
oo connector run "cal" --action "get_booking_references" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
