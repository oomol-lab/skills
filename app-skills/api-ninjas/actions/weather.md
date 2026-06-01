# API Ninjas · `weather`

Fetch the current weather conditions for a set of coordinates.

- **Service**: `api_ninjas`
- **Action**: `weather`
- **Action id**: `api_ninjas.weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "weather"
```

## Run

```bash
oo connector run "api_ninjas" --action "weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
