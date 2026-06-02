# Cal.com · `cancel_booking`

Cancel a Cal.com booking by UID, optionally providing a cancellation reason.

- **Service**: `cal`
- **Action**: `cancel_booking`
- **Action id**: `cal.cancel_booking`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "cancel_booking"
```

## Run

```bash
oo connector run "cal" --action "cancel_booking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
