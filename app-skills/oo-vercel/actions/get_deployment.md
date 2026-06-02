# Vercel · `get_deployment`

Get a Vercel deployment.

- **Service**: `vercel`
- **Action**: `get_deployment`
- **Action id**: `vercel.get_deployment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_deployment"
```

## Run

```bash
oo connector run "vercel" --action "get_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
