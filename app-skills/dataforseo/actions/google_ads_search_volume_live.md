# DataForSEO · `google_ads_search_volume_live`

Retrieve Google Ads search volume metrics from DataForSEO for one batch of keywords.

- **Service**: `dataforseo`
- **Action**: `google_ads_search_volume_live`
- **Action id**: `dataforseo.google_ads_search_volume_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_ads_search_volume_live"
```

## Run

```bash
oo connector run "dataforseo" --action "google_ads_search_volume_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
