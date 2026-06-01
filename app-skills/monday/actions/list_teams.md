# Monday · `list_teams`

List Monday teams with official filters and pagination.

- **Service**: `monday`
- **Action**: `list_teams`
- **Action id**: `monday.list_teams`
- **Required scopes**: teams:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_teams"
```

## Run

```bash
oo connector run "monday" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
