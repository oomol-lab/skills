# HubSpot · `get_property`

Get a single HubSpot property definition for contacts, companies, or deals.

- **Service**: `hubspot`
- **Action**: `get_property`
- **Action id**: `hubspot.get_property`
- **Required scopes**: hubspot.schemas.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "get_property"
```

## Run

```bash
oo connector run "hubspot" --action "get_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
