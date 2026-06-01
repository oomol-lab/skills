# Strava · `get_club`

Get Strava club details by ID.

- **Service**: `strava`
- **Action**: `get_club`
- **Action id**: `strava.get_club`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_club"
```

## Run

```bash
oo connector run "strava" --action "get_club" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
