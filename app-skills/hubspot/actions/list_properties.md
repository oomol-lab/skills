# HubSpot · `list_properties`

List HubSpot property definitions for contacts, companies, or deals.

- **Service**: `hubspot`
- **Action**: `list_properties`
- **Action id**: `hubspot.list_properties`
- **Required scopes**: hubspot.schemas.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "list_properties"
```

## Run

```bash
oo connector run "hubspot" --action "list_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
