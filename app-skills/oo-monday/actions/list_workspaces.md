# Monday · `list_workspaces`

List Monday workspaces with official filters and pagination.

- **Service**: `monday`
- **Action**: `list_workspaces`
- **Action id**: `monday.list_workspaces`
- **Required scopes**: workspaces:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_workspaces"
```

## Run

```bash
oo connector run "monday" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
