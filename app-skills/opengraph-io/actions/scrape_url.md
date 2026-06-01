# OpenGraph.io · `scrape_url`

Fetch the raw HTML for a page through the OpenGraph.io Scrape endpoint with optional render and proxy controls.

- **Service**: `opengraph_io`
- **Action**: `scrape_url`
- **Action id**: `opengraph_io.scrape_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opengraph_io" --action "scrape_url"
```

## Run

```bash
oo connector run "opengraph_io" --action "scrape_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
