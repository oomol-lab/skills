# Ambient Weather · `get_device_history`

Get recent historical observation records for an Ambient Weather device.

- **Service**: `ambient_weather`
- **Action**: `get_device_history`
- **Action id**: `ambient_weather.get_device_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambient_weather" --action "get_device_history"
```

## Run

```bash
oo connector run "ambient_weather" --action "get_device_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
