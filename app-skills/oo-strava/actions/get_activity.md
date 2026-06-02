# Strava · `get_activity`

Get activity details for current Strava athletes by ID.

- **Service**: `strava`
- **Action**: `get_activity`
- **Action id**: `strava.get_activity`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_activity"
```

## Run

```bash
oo connector run "strava" --action "get_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
