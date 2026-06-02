# Toggl Track · `list_projects`

List Toggl Track projects in a workspace.

- **Service**: `toggl`
- **Action**: `list_projects`
- **Action id**: `toggl.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "list_projects"
```

## Run

```bash
oo connector run "toggl" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
