# DataForSEO · `google_keywords_for_site_live`

Retrieve DataForSEO Labs Google keyword ideas relevant to a target domain.

- **Service**: `dataforseo`
- **Action**: `google_keywords_for_site_live`
- **Action id**: `dataforseo.google_keywords_for_site_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "google_keywords_for_site_live"
```

## Run

```bash
oo connector run "dataforseo" --action "google_keywords_for_site_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
