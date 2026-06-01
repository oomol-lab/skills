# Clockify · `list_projects`

List Clockify projects in a workspace.

- **Service**: `clockify`
- **Action**: `list_projects`
- **Action id**: `clockify.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "list_projects"
```

## Run

```bash
oo connector run "clockify" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
