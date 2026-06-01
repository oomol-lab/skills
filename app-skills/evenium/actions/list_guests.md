# Evenium · `list_guests`

List guests for one Evenium event with optional attendee filters, expansions, and pagination.

- **Service**: `evenium`
- **Action**: `list_guests`
- **Action id**: `evenium.list_guests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "list_guests"
```

## Run

```bash
oo connector run "evenium" --action "list_guests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
