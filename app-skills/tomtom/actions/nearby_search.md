# TomTom · `nearby_search`

Search for nearby places of interest around a coordinate with TomTom.

- **Service**: `tomtom`
- **Action**: `nearby_search`
- **Action id**: `tomtom.nearby_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomtom" --action "nearby_search"
```

## Run

```bash
oo connector run "tomtom" --action "nearby_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
