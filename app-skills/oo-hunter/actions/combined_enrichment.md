# Hunter · `combined_enrichment`

Retrieve combined person and company enrichment data from Hunter.

- **Service**: `hunter`
- **Action**: `combined_enrichment`
- **Action id**: `hunter.combined_enrichment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "combined_enrichment"
```

## Run

```bash
oo connector run "hunter" --action "combined_enrichment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
