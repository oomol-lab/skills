# Ticketmaster · `get_section_map_image`

Get a section-map image for a Ticketmaster event through the Partner Availability API.

- **Service**: `ticketmaster`
- **Action**: `get_section_map_image`
- **Action id**: `ticketmaster.get_section_map_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_section_map_image"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_section_map_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
