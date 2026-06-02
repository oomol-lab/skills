# Strava · `list_activity_laps`

Lists the segments for a given Strava activity.

- **Service**: `strava`
- **Action**: `list_activity_laps`
- **Action id**: `strava.list_activity_laps`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_activity_laps"
```

## Run

```bash
oo connector run "strava" --action "list_activity_laps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
