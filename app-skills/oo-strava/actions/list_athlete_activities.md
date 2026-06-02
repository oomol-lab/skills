# Strava · `list_athlete_activities`

Paginated list of current Strava athletes' activities.

- **Service**: `strava`
- **Action**: `list_athlete_activities`
- **Action id**: `strava.list_athlete_activities`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_athlete_activities"
```

## Run

```bash
oo connector run "strava" --action "list_athlete_activities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
