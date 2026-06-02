# Vercel · `delete_project_env`

Delete a Vercel project environment variable.

- **Service**: `vercel`
- **Action**: `delete_project_env`
- **Action id**: `vercel.delete_project_env`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "delete_project_env"
```

## Run

```bash
oo connector run "vercel" --action "delete_project_env" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vercel data. Always confirm the target and get explicit user approval before running.
