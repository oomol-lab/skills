# WeatherAPI · `get_current_weather`

Get current weather conditions for a WeatherAPI location query.

- **Service**: `weatherapi`
- **Action**: `get_current_weather`
- **Action id**: `weatherapi.get_current_weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherapi" --action "get_current_weather"
```

## Run

```bash
oo connector run "weatherapi" --action "get_current_weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
