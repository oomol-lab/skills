# Linear · `list_linear_teams`

Lists Linear teams accessible with current credentials, along with a list of members and projects.

- **Service**: `linear`
- **Action**: `list_linear_teams`
- **Action id**: `linear.list_linear_teams`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_teams"
```

## Run

```bash
oo connector run "linear" --action "list_linear_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
