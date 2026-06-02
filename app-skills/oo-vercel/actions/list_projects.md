# Vercel · `list_projects`

List Vercel projects.

- **Service**: `vercel`
- **Action**: `list_projects`
- **Action id**: `vercel.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "list_projects"
```

## Run

```bash
oo connector run "vercel" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
