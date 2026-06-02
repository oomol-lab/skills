# Lemon Squeezy · `list_subscriptions`

List Lemon Squeezy subscriptions with optional filters and pagination.

- **Service**: `lemon_squeezy`
- **Action**: `list_subscriptions`
- **Action id**: `lemon_squeezy.list_subscriptions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_subscriptions"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_subscriptions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
