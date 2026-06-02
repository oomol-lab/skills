# Strava · `get_authenticated_athlete`

Get currently licensed Strava athlete profiles.

- **Service**: `strava`
- **Action**: `get_authenticated_athlete`
- **Action id**: `strava.get_authenticated_athlete`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_authenticated_athlete"
```

## Run

```bash
oo connector run "strava" --action "get_authenticated_athlete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
