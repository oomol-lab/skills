# Strava · `list_segment_efforts`

List Strava segment scores by segment ID.

- **Service**: `strava`
- **Action**: `list_segment_efforts`
- **Action id**: `strava.list_segment_efforts`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_segment_efforts"
```

## Run

```bash
oo connector run "strava" --action "list_segment_efforts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
