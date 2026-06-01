# Strava · `explore_segments`

Explore eligible Strava segments within a given bounding box.

- **Service**: `strava`
- **Action**: `explore_segments`
- **Action id**: `strava.explore_segments`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "explore_segments"
```

## Run

```bash
oo connector run "strava" --action "explore_segments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
