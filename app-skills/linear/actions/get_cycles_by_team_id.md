# Linear · `get_cycles_by_team_id`

Get all cycle information under the specified team.

- **Service**: `linear`
- **Action**: `get_cycles_by_team_id`
- **Action id**: `linear.get_cycles_by_team_id`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_cycles_by_team_id"
```

## Run

```bash
oo connector run "linear" --action "get_cycles_by_team_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
