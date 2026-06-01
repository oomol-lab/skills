# Monday · `list_team_members`

List the members of a specific Monday team.

- **Service**: `monday`
- **Action**: `list_team_members`
- **Action id**: `monday.list_team_members`
- **Required scopes**: teams:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_team_members"
```

## Run

```bash
oo connector run "monday" --action "list_team_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
