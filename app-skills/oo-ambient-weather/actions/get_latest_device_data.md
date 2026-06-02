# Ambient Weather · `get_latest_device_data`

Get the latest observation record for an Ambient Weather device.

- **Service**: `ambient_weather`
- **Action**: `get_latest_device_data`
- **Action id**: `ambient_weather.get_latest_device_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambient_weather" --action "get_latest_device_data"
```

## Run

```bash
oo connector run "ambient_weather" --action "get_latest_device_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
