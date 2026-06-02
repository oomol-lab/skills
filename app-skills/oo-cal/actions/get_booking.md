# Cal.com · `get_booking`

Get a Cal.com booking by booking UID.

- **Service**: `cal`
- **Action**: `get_booking`
- **Action id**: `cal.get_booking`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_booking"
```

## Run

```bash
oo connector run "cal" --action "get_booking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
