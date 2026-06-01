# Strava · `list_athlete_clubs`

Lists the clubs current Strava athletes belong to.

- **Service**: `strava`
- **Action**: `list_athlete_clubs`
- **Action id**: `strava.list_athlete_clubs`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_athlete_clubs"
```

## Run

```bash
oo connector run "strava" --action "list_athlete_clubs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
