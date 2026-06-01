# Strava · `list_activity_kudoers`

List athletes who have liked the specified Strava activity.

- **Service**: `strava`
- **Action**: `list_activity_kudoers`
- **Action id**: `strava.list_activity_kudoers`
- **Required scopes**: strava.activity.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_activity_kudoers"
```

## Run

```bash
oo connector run "strava" --action "list_activity_kudoers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
