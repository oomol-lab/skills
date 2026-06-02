# Beehiiv · `list_subscriptions`

List Beehiiv subscriptions for a publication with cursor pagination and documented filters.

- **Service**: `beehiiv`
- **Action**: `list_subscriptions`
- **Action id**: `beehiiv.list_subscriptions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "list_subscriptions"
```

## Run

```bash
oo connector run "beehiiv" --action "list_subscriptions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
