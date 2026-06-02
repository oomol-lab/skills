# Strava · `get_activity_zones`

Gets the training partition results for the specified Strava activity.

- **Service**: `strava`
- **Action**: `get_activity_zones`
- **Action id**: `strava.get_activity_zones`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_activity_zones"
```

## Run

```bash
oo connector run "strava" --action "get_activity_zones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
