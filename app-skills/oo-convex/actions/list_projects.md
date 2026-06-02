# Convex · `list_projects`

List all Convex projects for a team.

- **Service**: `convex`
- **Action**: `list_projects`
- **Action id**: `convex.list_projects`
- **Required scopes**: convex.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "list_projects"
```

## Run

```bash
oo connector run "convex" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
