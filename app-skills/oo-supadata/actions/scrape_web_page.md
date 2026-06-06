# Supadata · `scrape_web_page`

Extract Markdown content from a web page.

- **Service**: `supadata`
- **Action**: `scrape_web_page`
- **Action id**: `supadata.scrape_web_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "scrape_web_page"
```

## Run

```bash
oo connector run "supadata" --action "scrape_web_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
