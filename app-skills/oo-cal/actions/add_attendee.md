# Cal.com · `add_attendee`

Add an attendee to a Cal.com booking.

- **Service**: `cal`
- **Action**: `add_attendee`
- **Action id**: `cal.add_attendee`
- **Required scopes**: cal.bookings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "add_attendee"
```

## Run

```bash
oo connector run "cal" --action "add_attendee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
