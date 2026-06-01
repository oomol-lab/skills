# OpenGraph.io · `extract_site`

Extract Open Graph, Twitter Card, oEmbed, and inferred metadata for a site through the OpenGraph.io Site endpoint.

- **Service**: `opengraph_io`
- **Action**: `extract_site`
- **Action id**: `opengraph_io.extract_site`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opengraph_io" --action "extract_site"
```

## Run

```bash
oo connector run "opengraph_io" --action "extract_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
