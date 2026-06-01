# BigDataCloud · `reverse_geocode_with_timezone`

Reverse geocode coordinates and return timezone data from BigDataCloud.

- **Service**: `big_data_cloud`
- **Action**: `reverse_geocode_with_timezone`
- **Action id**: `big_data_cloud.reverse_geocode_with_timezone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "big_data_cloud" --action "reverse_geocode_with_timezone"
```

## Run

```bash
oo connector run "big_data_cloud" --action "reverse_geocode_with_timezone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
