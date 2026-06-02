# Ticketmaster · `get_classification_details`

Get the details for a specific Ticketmaster classification by ID.

- **Service**: `ticketmaster`
- **Action**: `get_classification_details`
- **Action id**: `ticketmaster.get_classification_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_classification_details"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_classification_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
