# Strava · `get_zones`

Get the current Strava athlete's training partition.

- **Service**: `strava`
- **Action**: `get_zones`
- **Action id**: `strava.get_zones`
- **Required scopes**: strava.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_zones"
```

## Run

```bash
oo connector run "strava" --action "get_zones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
