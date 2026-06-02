# Hyperbrowser · `start_web_crawl`

Start an asynchronous Hyperbrowser crawl job from a URL.

- **Service**: `hyperbrowser`
- **Action**: `start_web_crawl`
- **Action id**: `hyperbrowser.start_web_crawl`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hyperbrowser" --action "start_web_crawl"
```

## Run

```bash
oo connector run "hyperbrowser" --action "start_web_crawl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
