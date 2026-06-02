# Hunter · `people_enrichment`

Retrieve person enrichment data from Hunter by email address or LinkedIn handle.

- **Service**: `hunter`
- **Action**: `people_enrichment`
- **Action id**: `hunter.people_enrichment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "people_enrichment"
```

## Run

```bash
oo connector run "hunter" --action "people_enrichment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
