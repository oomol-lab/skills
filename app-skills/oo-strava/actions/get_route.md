# Strava · `get_route`

Get Strava route details by ID.

- **Service**: `strava`
- **Action**: `get_route`
- **Action id**: `strava.get_route`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_route"
```

## Run

```bash
oo connector run "strava" --action "get_route" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
