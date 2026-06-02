# Convex · `get_project_by_id`

Get a Convex project by numeric project ID.

- **Service**: `convex`
- **Action**: `get_project_by_id`
- **Action id**: `convex.get_project_by_id`
- **Required scopes**: convex.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "get_project_by_id"
```

## Run

```bash
oo connector run "convex" --action "get_project_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
