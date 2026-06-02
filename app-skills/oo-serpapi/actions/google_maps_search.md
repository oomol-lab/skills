# SerpApi · `google_maps_search`

Run a Google Maps search through SerpApi.

- **Service**: `serpapi`
- **Action**: `google_maps_search`
- **Action id**: `serpapi.google_maps_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serpapi" --action "google_maps_search"
```

## Run

```bash
oo connector run "serpapi" --action "google_maps_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
