# Scrape.do · `fetch_json`

Fetch one public URL through Scrape.do returnJSON mode and return the parsed JSON payload.

- **Service**: `scrape_do`
- **Action**: `fetch_json`
- **Action id**: `scrape_do.fetch_json`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrape_do" --action "fetch_json"
```

## Run

```bash
oo connector run "scrape_do" --action "fetch_json" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
