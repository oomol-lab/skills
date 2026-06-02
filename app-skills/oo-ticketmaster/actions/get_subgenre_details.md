# Ticketmaster · `get_subgenre_details`

Get the details for a specific Ticketmaster sub-genre by ID.

- **Service**: `ticketmaster`
- **Action**: `get_subgenre_details`
- **Action id**: `ticketmaster.get_subgenre_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_subgenre_details"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_subgenre_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
