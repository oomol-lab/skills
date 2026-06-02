# Vercel · `get_webhook`

Get a Vercel webhook.

- **Service**: `vercel`
- **Action**: `get_webhook`
- **Action id**: `vercel.get_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_webhook"
```

## Run

```bash
oo connector run "vercel" --action "get_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
