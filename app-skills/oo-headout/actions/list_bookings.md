# Headout · `list_bookings`

List bookings accessible to the current Headout API key.

- **Service**: `headout`
- **Action**: `list_bookings`
- **Action id**: `headout.list_bookings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "list_bookings"
```

## Run

```bash
oo connector run "headout" --action "list_bookings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
