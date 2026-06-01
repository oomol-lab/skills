# DataForSEO · `google_keyword_overview_live`

Retrieve DataForSEO Labs Google keyword overview metrics for a batch of keywords.

- **Service**: `dataforseo`
- **Action**: `google_keyword_overview_live`
- **Action id**: `dataforseo.google_keyword_overview_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_keyword_overview_live"
```

## Run

```bash
oo connector run "dataforseo" --action "google_keyword_overview_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
