# Evenium · `get_guest_status`

Get the current RSVP status for one Evenium guest.

- **Service**: `evenium`
- **Action**: `get_guest_status`
- **Action id**: `evenium.get_guest_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "get_guest_status"
```

## Run

```bash
oo connector run "evenium" --action "get_guest_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
