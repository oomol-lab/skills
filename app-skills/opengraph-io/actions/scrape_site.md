# OpenGraph.io · `scrape_site`

Retrieve a site's metadata through the OpenGraph.io Site endpoint with cache, proxy, render, and retry controls.

- **Service**: `opengraph_io`
- **Action**: `scrape_site`
- **Action id**: `opengraph_io.scrape_site`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opengraph_io" --action "scrape_site"
```

## Run

```bash
oo connector run "opengraph_io" --action "scrape_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
