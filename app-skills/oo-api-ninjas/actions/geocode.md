# API Ninjas · `geocode`

Convert a city name into geographic coordinates and country information.

- **Service**: `api_ninjas`
- **Action**: `geocode`
- **Action id**: `api_ninjas.geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "geocode"
```

## Run

```bash
oo connector run "api_ninjas" --action "geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
