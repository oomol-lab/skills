# Strava · `list_activity_comments`

Lists comments for the specified Strava activity.

- **Service**: `strava`
- **Action**: `list_activity_comments`
- **Action id**: `strava.list_activity_comments`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_activity_comments"
```

## Run

```bash
oo connector run "strava" --action "list_activity_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
