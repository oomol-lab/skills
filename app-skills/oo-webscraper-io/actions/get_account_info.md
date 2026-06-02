# WebScraper.io · `get_account_info`

Get the current Web Scraper Cloud account profile for the connected API token.

- **Service**: `webscraper_io`
- **Action**: `get_account_info`
- **Action id**: `webscraper_io.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "get_account_info"
```

## Run

```bash
oo connector run "webscraper_io" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
