# Strava · `list_athlete_routes`

Paginated list of routes for a given Strava athlete.

- **Service**: `strava`
- **Action**: `list_athlete_routes`
- **Action id**: `strava.list_athlete_routes`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_athlete_routes"
```

## Run

```bash
oo connector run "strava" --action "list_athlete_routes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
