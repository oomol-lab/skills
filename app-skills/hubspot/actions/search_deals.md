# HubSpot · `search_deals`

Search HubSpot deals with optional filters, sorting, and selected properties.

- **Service**: `hubspot`
- **Action**: `search_deals`
- **Action id**: `hubspot.search_deals`
- **Required scopes**: hubspot.deals.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "search_deals"
```

## Run

```bash
oo connector run "hubspot" --action "search_deals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
