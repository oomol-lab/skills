# Vercel · `get_runtime_logs`

Get runtime logs for a Vercel deployment.

- **Service**: `vercel`
- **Action**: `get_runtime_logs`
- **Action id**: `vercel.get_runtime_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_runtime_logs"
```

## Run

```bash
oo connector run "vercel" --action "get_runtime_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
