# Vercel · `list_deployments`

List Vercel deployments.

- **Service**: `vercel`
- **Action**: `list_deployments`
- **Action id**: `vercel.list_deployments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "list_deployments"
```

## Run

```bash
oo connector run "vercel" --action "list_deployments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
