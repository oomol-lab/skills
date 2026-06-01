# ScrapingBee · `get_usage_stats`

Retrieve the current ScrapingBee API usage and concurrency statistics.

- **Service**: `scrapingbee`
- **Action**: `get_usage_stats`
- **Action id**: `scrapingbee.get_usage_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingbee" --action "get_usage_stats"
```

## Run

```bash
oo connector run "scrapingbee" --action "get_usage_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
