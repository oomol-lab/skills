# Strava · `get_segment`

Get Strava segment details by ID.

- **Service**: `strava`
- **Action**: `get_segment`
- **Action id**: `strava.get_segment`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_segment"
```

## Run

```bash
oo connector run "strava" --action "get_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
