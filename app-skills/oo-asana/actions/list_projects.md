# Asana · `list_projects`

List Asana projects for a workspace, with optional archived filtering and pagination.

- **Service**: `asana`
- **Action**: `list_projects`
- **Action id**: `asana.list_projects`
- **Required scopes**: projects:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "list_projects"
```

## Run

```bash
oo connector run "asana" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
