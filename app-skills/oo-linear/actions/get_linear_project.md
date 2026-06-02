# Linear · `get_linear_project`

Get the details of a Linear project, complete with team, members, and initiatives on demand.

- **Service**: `linear`
- **Action**: `get_linear_project`
- **Action id**: `linear.get_linear_project`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_linear_project"
```

## Run

```bash
oo connector run "linear" --action "get_linear_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
