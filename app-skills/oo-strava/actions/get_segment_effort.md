# Strava · `get_segment_effort`

Get Strava segment performance details by ID.

- **Service**: `strava`
- **Action**: `get_segment_effort`
- **Action id**: `strava.get_segment_effort`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_segment_effort"
```

## Run

```bash
oo connector run "strava" --action "get_segment_effort" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
