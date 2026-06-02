# ScrapingBee · `extract_data`

Extract structured JSON data from one public URL with ScrapingBee extract_rules.

- **Service**: `scrapingbee`
- **Action**: `extract_data`
- **Action id**: `scrapingbee.extract_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingbee" --action "extract_data"
```

## Run

```bash
oo connector run "scrapingbee" --action "extract_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
