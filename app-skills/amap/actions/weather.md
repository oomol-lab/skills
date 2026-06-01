# AMap · `weather`

Get weather information.

- **Service**: `amap`
- **Action**: `weather`
- **Action id**: `amap.weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "weather"
```

## Run

```bash
oo connector run "amap" --action "weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
