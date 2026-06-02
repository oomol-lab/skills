# Beehiiv · `get_subscription`

Fetch one Beehiiv subscription by ID with optional expansions.

- **Service**: `beehiiv`
- **Action**: `get_subscription`
- **Action id**: `beehiiv.get_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "get_subscription"
```

## Run

```bash
oo connector run "beehiiv" --action "get_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
