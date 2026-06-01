# Weatherbit · `get_current_weather`

Get current weather observations from Weatherbit for a location.

- **Service**: `weatherbit`
- **Action**: `get_current_weather`
- **Action id**: `weatherbit.get_current_weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherbit" --action "get_current_weather"
```

## Run

```bash
oo connector run "weatherbit" --action "get_current_weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
