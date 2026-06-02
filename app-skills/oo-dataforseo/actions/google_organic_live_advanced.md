# DataForSEO · `google_organic_live_advanced`

Run a DataForSEO Google Organic SERP Live Advanced request for one search keyword.

- **Service**: `dataforseo`
- **Action**: `google_organic_live_advanced`
- **Action id**: `dataforseo.google_organic_live_advanced`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_organic_live_advanced"
```

## Run

```bash
oo connector run "dataforseo" --action "google_organic_live_advanced" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
