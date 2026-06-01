# ClickUp · `get_workspace_everything_level_views`

Get the ClickUp everything-level views available on a workspace.

- **Service**: `clickup`
- **Action**: `get_workspace_everything_level_views`
- **Action id**: `clickup.get_workspace_everything_level_views`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_workspace_everything_level_views"
```

## Run

```bash
oo connector run "clickup" --action "get_workspace_everything_level_views" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
