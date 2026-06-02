# ScrapingAnt · `get_api_credits_usage`

Read the current ScrapingAnt subscription status and remaining API credits.

- **Service**: `scrapingant`
- **Action**: `get_api_credits_usage`
- **Action id**: `scrapingant.get_api_credits_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingant" --action "get_api_credits_usage"
```

## Run

```bash
oo connector run "scrapingant" --action "get_api_credits_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
