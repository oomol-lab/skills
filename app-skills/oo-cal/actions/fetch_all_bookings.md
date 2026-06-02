# Cal.com · `fetch_all_bookings`

Compatibility alias for Composio's fetch-all-bookings action. Lists bookings with optional filters and pagination.

- **Service**: `cal`
- **Action**: `fetch_all_bookings`
- **Action id**: `cal.fetch_all_bookings`
- **Required scopes**: cal.bookings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "fetch_all_bookings"
```

## Run

```bash
oo connector run "cal" --action "fetch_all_bookings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
