# Strava · `get_route_streams`

Get flow data for a specified Strava route.

- **Service**: `strava`
- **Action**: `get_route_streams`
- **Action id**: `strava.get_route_streams`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_route_streams"
```

## Run

```bash
oo connector run "strava" --action "get_route_streams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
