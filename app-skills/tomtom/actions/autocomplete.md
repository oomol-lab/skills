# TomTom · `autocomplete`

Return autocomplete suggestions from the TomTom Search API.

- **Service**: `tomtom`
- **Action**: `autocomplete`
- **Action id**: `tomtom.autocomplete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomtom" --action "autocomplete"
```

## Run

```bash
oo connector run "tomtom" --action "autocomplete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
