# Linear · `list_linear_states`

Lists all workflow statuses for the specified team.

- **Service**: `linear`
- **Action**: `list_linear_states`
- **Action id**: `linear.list_linear_states`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_states"
```

## Run

```bash
oo connector run "linear" --action "list_linear_states" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
