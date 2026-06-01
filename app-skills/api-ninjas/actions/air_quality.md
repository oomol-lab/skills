# API Ninjas · `air_quality`

Fetch current air quality metrics for coordinates or a city-based lookup.

- **Service**: `api_ninjas`
- **Action**: `air_quality`
- **Action id**: `api_ninjas.air_quality`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "air_quality"
```

## Run

```bash
oo connector run "api_ninjas" --action "air_quality" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
