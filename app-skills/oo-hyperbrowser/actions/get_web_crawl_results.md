# Hyperbrowser · `get_web_crawl_results`

Get paginated results for a Hyperbrowser crawl job.

- **Service**: `hyperbrowser`
- **Action**: `get_web_crawl_results`
- **Action id**: `hyperbrowser.get_web_crawl_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hyperbrowser" --action "get_web_crawl_results"
```

## Run

```bash
oo connector run "hyperbrowser" --action "get_web_crawl_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
