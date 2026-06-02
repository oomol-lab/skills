# Similarweb · `get_subscription_status`

Get the remaining Similarweb usage allowance for the connected API key.

- **Service**: `similarweb_digitalrank_api`
- **Action**: `get_subscription_status`
- **Action id**: `similarweb_digitalrank_api.get_subscription_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "similarweb_digitalrank_api" --action "get_subscription_status"
```

## Run

```bash
oo connector run "similarweb_digitalrank_api" --action "get_subscription_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
