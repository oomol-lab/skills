# HubSpot · `create_deal`

Create a HubSpot deal with the provided properties and optional associations.

- **Service**: `hubspot`
- **Action**: `create_deal`
- **Action id**: `hubspot.create_deal`
- **Required scopes**: hubspot.deals.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "create_deal"
```

## Run

```bash
oo connector run "hubspot" --action "create_deal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HubSpot state. Confirm the exact payload and intended effect with the user before running.
