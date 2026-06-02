# Strava · `list_starred_segments`

Paginated list of current Strava athlete collections.

- **Service**: `strava`
- **Action**: `list_starred_segments`
- **Action id**: `strava.list_starred_segments`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_starred_segments"
```

## Run

```bash
oo connector run "strava" --action "list_starred_segments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
