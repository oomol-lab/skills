# Strava · `get_athlete_stats`

Get a summary of statistics for a specified Strava athlete.

- **Service**: `strava`
- **Action**: `get_athlete_stats`
- **Action id**: `strava.get_athlete_stats`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_athlete_stats"
```

## Run

```bash
oo connector run "strava" --action "get_athlete_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
