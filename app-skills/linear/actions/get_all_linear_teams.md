# Linear · `get_all_linear_teams`

Lists all Linear team basic information accessible with the current credentials.

- **Service**: `linear`
- **Action**: `get_all_linear_teams`
- **Action id**: `linear.get_all_linear_teams`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_all_linear_teams"
```

## Run

```bash
oo connector run "linear" --action "get_all_linear_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
