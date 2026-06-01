# Cal.com · `create_booking`

Create a Cal.com booking.

- **Service**: `cal`
- **Action**: `create_booking`
- **Action id**: `cal.create_booking`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "create_booking"
```

## Run

```bash
oo connector run "cal" --action "create_booking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
