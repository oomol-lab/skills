# Vercel · `create_project_env`

Create a Vercel project environment variable.

- **Service**: `vercel`
- **Action**: `create_project_env`
- **Action id**: `vercel.create_project_env`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "create_project_env"
```

## Run

```bash
oo connector run "vercel" --action "create_project_env" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vercel state. Confirm the exact payload and intended effect with the user before running.
