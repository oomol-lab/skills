# Vercel · `list_webhooks`

List Vercel webhooks.

- **Service**: `vercel`
- **Action**: `list_webhooks`
- **Action id**: `vercel.list_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "list_webhooks"
```

## Run

```bash
oo connector run "vercel" --action "list_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
