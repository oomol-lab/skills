# Strava · `list_club_members`

Paginated list of Strava club members.

- **Service**: `strava`
- **Action**: `list_club_members`
- **Action id**: `strava.list_club_members`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "list_club_members"
```

## Run

```bash
oo connector run "strava" --action "list_club_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
