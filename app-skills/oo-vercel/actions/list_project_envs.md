# Vercel · `list_project_envs`

List environment variables for a Vercel project.

- **Service**: `vercel`
- **Action**: `list_project_envs`
- **Action id**: `vercel.list_project_envs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "list_project_envs"
```

## Run

```bash
oo connector run "vercel" --action "list_project_envs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
