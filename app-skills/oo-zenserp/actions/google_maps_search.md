# Zenserp · `google_maps_search`

Run a Google Maps local search request through Zenserp.

- **Service**: `zenserp`
- **Action**: `google_maps_search`
- **Action id**: `zenserp.google_maps_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenserp" --action "google_maps_search"
```

## Run

```bash
oo connector run "zenserp" --action "google_maps_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
