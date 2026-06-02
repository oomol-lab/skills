# Tencent Maps · `weather`

Fetch Tencent Maps realtime or forecast weather for an adcode or coordinate.

- **Service**: `tencent_maps`
- **Action**: `weather`
- **Action id**: `tencent_maps.weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "weather"
```

## Run

```bash
oo connector run "tencent_maps" --action "weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
