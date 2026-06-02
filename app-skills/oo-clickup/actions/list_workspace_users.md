# ClickUp · `list_workspace_users`

List the members visible on a ClickUp workspace.

- **Service**: `clickup`
- **Action**: `list_workspace_users`
- **Action id**: `clickup.list_workspace_users`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_workspace_users"
```

## Run

```bash
oo connector run "clickup" --action "list_workspace_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
