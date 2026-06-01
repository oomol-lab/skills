# Hyperbrowser · `get_web_crawl_status`

Get the current status of a Hyperbrowser crawl job.

- **Service**: `hyperbrowser`
- **Action**: `get_web_crawl_status`
- **Action id**: `hyperbrowser.get_web_crawl_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hyperbrowser" --action "get_web_crawl_status"
```

## Run

```bash
oo connector run "hyperbrowser" --action "get_web_crawl_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
