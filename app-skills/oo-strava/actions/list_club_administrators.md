# Strava · `list_club_administrators`

Paginated list of Strava club admins.

- **Service**: `strava`
- **Action**: `list_club_administrators`
- **Action id**: `strava.list_club_administrators`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_club_administrators"
```

## Run

```bash
oo connector run "strava" --action "list_club_administrators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
