# Ambee · `get_air_quality_by_lat_lng`

Get the latest air quality station readings for one coordinate from Ambee.

- **Service**: `ambee`
- **Action**: `get_air_quality_by_lat_lng`
- **Action id**: `ambee.get_air_quality_by_lat_lng`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambee" --action "get_air_quality_by_lat_lng"
```

## Run

```bash
oo connector run "ambee" --action "get_air_quality_by_lat_lng" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
