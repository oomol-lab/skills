# HubSpot · `get_deal`

Get a HubSpot deal by record ID or by a custom idProperty value.

- **Service**: `hubspot`
- **Action**: `get_deal`
- **Action id**: `hubspot.get_deal`
- **Required scopes**: hubspot.deals.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "get_deal"
```

## Run

```bash
oo connector run "hubspot" --action "get_deal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
