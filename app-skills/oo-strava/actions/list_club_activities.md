# Strava · `list_club_activities`

Paginated list of recent activity for a given Strava club.

- **Service**: `strava`
- **Action**: `list_club_activities`
- **Action id**: `strava.list_club_activities`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_club_activities"
```

## Run

```bash
oo connector run "strava" --action "list_club_activities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
