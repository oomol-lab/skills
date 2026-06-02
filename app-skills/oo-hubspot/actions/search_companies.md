# HubSpot · `search_companies`

Search HubSpot companies with optional filters, sorting, and selected properties.

- **Service**: `hubspot`
- **Action**: `search_companies`
- **Action id**: `hubspot.search_companies`
- **Required scopes**: hubspot.companies.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hubspot" --action "search_companies"
```

## Run

```bash
oo connector run "hubspot" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
