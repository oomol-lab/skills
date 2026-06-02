# Ticketmaster · `get_event_images`

Get the image set for a specific Ticketmaster event.

- **Service**: `ticketmaster`
- **Action**: `get_event_images`
- **Action id**: `ticketmaster.get_event_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_event_images"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_event_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
