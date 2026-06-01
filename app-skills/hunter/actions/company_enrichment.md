# Hunter · `company_enrichment`

Retrieve company enrichment data for a domain from Hunter.

- **Service**: `hunter`
- **Action**: `company_enrichment`
- **Action id**: `hunter.company_enrichment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "company_enrichment"
```

## Run

```bash
oo connector run "hunter" --action "company_enrichment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
