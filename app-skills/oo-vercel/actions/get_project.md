# Vercel · `get_project`

Get a Vercel project.

- **Service**: `vercel`
- **Action**: `get_project`
- **Action id**: `vercel.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_project"
```

## Run

```bash
oo connector run "vercel" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
