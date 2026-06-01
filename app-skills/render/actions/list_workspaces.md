# Render · `list_workspaces`

List Render workspaces available to the authenticated API key.

- **Service**: `render`
- **Action**: `list_workspaces`
- **Action id**: `render.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "list_workspaces"
```

## Run

```bash
oo connector run "render" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
