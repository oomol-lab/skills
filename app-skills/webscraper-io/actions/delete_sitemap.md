# WebScraper.io · `delete_sitemap`

Delete a Web Scraper Cloud sitemap by numeric sitemap ID.

- **Service**: `webscraper_io`
- **Action**: `delete_sitemap`
- **Action id**: `webscraper_io.delete_sitemap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "delete_sitemap"
```

## Run

```bash
oo connector run "webscraper_io" --action "delete_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites WebScraper.io data. Always confirm the target and get explicit user approval before running.
