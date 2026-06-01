# Toggl Track · `list_workspaces`

List the Toggl Track workspaces available to the authenticated user.

- **Service**: `toggl`
- **Action**: `list_workspaces`
- **Action id**: `toggl.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "list_workspaces"
```

## Run

```bash
oo connector run "toggl" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
