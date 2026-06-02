# Lemon Squeezy · `list_webhooks`

List Lemon Squeezy webhooks with optional store filtering and pagination.

- **Service**: `lemon_squeezy`
- **Action**: `list_webhooks`
- **Action id**: `lemon_squeezy.list_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_webhooks"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
