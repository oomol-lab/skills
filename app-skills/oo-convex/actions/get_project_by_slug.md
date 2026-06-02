# Convex · `get_project_by_slug`

Get a Convex project by team identifier or slug plus project slug.

- **Service**: `convex`
- **Action**: `get_project_by_slug`
- **Action id**: `convex.get_project_by_slug`
- **Required scopes**: convex.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "get_project_by_slug"
```

## Run

```bash
oo connector run "convex" --action "get_project_by_slug" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
