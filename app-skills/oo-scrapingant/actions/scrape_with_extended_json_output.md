# ScrapingAnt · `scrape_with_extended_json_output`

Scrape a page through ScrapingAnt's v2 extended endpoint and return HTML, text, cookies, headers, XHRs, and iframes.

- **Service**: `scrapingant`
- **Action**: `scrape_with_extended_json_output`
- **Action id**: `scrapingant.scrape_with_extended_json_output`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingant" --action "scrape_with_extended_json_output"
```

## Run

```bash
oo connector run "scrapingant" --action "scrape_with_extended_json_output" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
