# ScrapingAnt · `extract_data_with_ai`

Extract structured top-level JSON fields from a page through ScrapingAnt's AI extraction endpoint.

- **Service**: `scrapingant`
- **Action**: `extract_data_with_ai`
- **Action id**: `scrapingant.extract_data_with_ai`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingant" --action "extract_data_with_ai"
```

## Run

```bash
oo connector run "scrapingant" --action "extract_data_with_ai" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
