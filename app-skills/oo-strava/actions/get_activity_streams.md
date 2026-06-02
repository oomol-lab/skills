# Strava · `get_activity_streams`

Get streaming data for the specified Strava activity.

- **Service**: `strava`
- **Action**: `get_activity_streams`
- **Action id**: `strava.get_activity_streams`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_activity_streams"
```

## Run

```bash
oo connector run "strava" --action "get_activity_streams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
