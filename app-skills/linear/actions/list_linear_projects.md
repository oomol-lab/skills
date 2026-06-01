# Linear · `list_linear_projects`

Lists Linear projects accessible with the current credentials.

- **Service**: `linear`
- **Action**: `list_linear_projects`
- **Action id**: `linear.list_linear_projects`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_projects"
```

## Run

```bash
oo connector run "linear" --action "list_linear_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
