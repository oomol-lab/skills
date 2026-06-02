# Ticketmaster · `get_segment_details`

Get the details for a specific Ticketmaster segment by ID.

- **Service**: `ticketmaster`
- **Action**: `get_segment_details`
- **Action id**: `ticketmaster.get_segment_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_segment_details"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_segment_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
