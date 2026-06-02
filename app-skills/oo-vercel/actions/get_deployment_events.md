# Vercel · `get_deployment_events`

Get Vercel deployment events.

- **Service**: `vercel`
- **Action**: `get_deployment_events`
- **Action id**: `vercel.get_deployment_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_deployment_events"
```

## Run

```bash
oo connector run "vercel" --action "get_deployment_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
