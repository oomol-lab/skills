# ScrapingAnt · `extract_content_as_markdown`

Convert a page into Markdown through ScrapingAnt's Markdown transformation endpoint.

- **Service**: `scrapingant`
- **Action**: `extract_content_as_markdown`
- **Action id**: `scrapingant.extract_content_as_markdown`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingant" --action "extract_content_as_markdown"
```

## Run

```bash
oo connector run "scrapingant" --action "extract_content_as_markdown" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
