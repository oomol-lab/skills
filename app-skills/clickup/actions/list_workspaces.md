# ClickUp · `list_workspaces`

List the ClickUp workspaces available to the authenticated user.

- **Service**: `clickup`
- **Action**: `list_workspaces`
- **Action id**: `clickup.list_workspaces`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_workspaces"
```

## Run

```bash
oo connector run "clickup" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
