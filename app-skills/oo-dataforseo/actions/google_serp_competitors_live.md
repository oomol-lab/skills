# DataForSEO · `google_serp_competitors_live`

Retrieve domains competing in Google SERPs for the specified keywords.

- **Service**: `dataforseo`
- **Action**: `google_serp_competitors_live`
- **Action id**: `dataforseo.google_serp_competitors_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_serp_competitors_live"
```

## Run

```bash
oo connector run "dataforseo" --action "google_serp_competitors_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
