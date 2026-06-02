# Capsule CRM · `search_opportunities`

Search Capsule CRM opportunities by query text.

- **Service**: `capsule_crm`
- **Action**: `search_opportunities`
- **Action id**: `capsule_crm.search_opportunities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "search_opportunities"
```

## Run

```bash
oo connector run "capsule_crm" --action "search_opportunities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
