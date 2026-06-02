# OpenWeather · `get_circle_city_weather`

Retrieve current weather for nearby cities around one latitude and longitude by using OpenWeather's compatibility city-search endpoint.

- **Service**: `openweather_api`
- **Action**: `get_circle_city_weather`
- **Action id**: `openweather_api.get_circle_city_weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_circle_city_weather"
```

## Run

```bash
oo connector run "openweather_api" --action "get_circle_city_weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
