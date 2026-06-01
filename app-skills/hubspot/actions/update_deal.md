# HubSpot · `update_deal`

Update a HubSpot deal by record ID or by a custom idProperty value.

- **Service**: `hubspot`
- **Action**: `update_deal`
- **Action id**: `hubspot.update_deal`
- **Required scopes**: hubspot.deals.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "update_deal"
```

## Run

```bash
oo connector run "hubspot" --action "update_deal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HubSpot state. Confirm the exact payload and intended effect with the user before running.
