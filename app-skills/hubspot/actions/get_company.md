# HubSpot · `get_company`

Get a HubSpot company by record ID or by a custom idProperty value.

- **Service**: `hubspot`
- **Action**: `get_company`
- **Action id**: `hubspot.get_company`
- **Required scopes**: hubspot.companies.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "get_company"
```

## Run

```bash
oo connector run "hubspot" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
