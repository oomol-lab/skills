# Roboflow · `list_projects`

List Roboflow projects visible to the API key workspace.

- **Service**: `roboflow`
- **Action**: `list_projects`
- **Action id**: `roboflow.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "list_projects"
```

## Run

```bash
oo connector run "roboflow" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
