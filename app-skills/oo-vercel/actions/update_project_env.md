# Vercel · `update_project_env`

Update a Vercel project environment variable.

- **Service**: `vercel`
- **Action**: `update_project_env`
- **Action id**: `vercel.update_project_env`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "update_project_env"
```

## Run

```bash
oo connector run "vercel" --action "update_project_env" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vercel state. Confirm the exact payload and intended effect with the user before running.
