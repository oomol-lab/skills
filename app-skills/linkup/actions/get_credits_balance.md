# Linkup · `get_credits_balance`

Get the current Linkup credits balance for the connected API key.

- **Service**: `linkup`
- **Action**: `get_credits_balance`
- **Action id**: `linkup.get_credits_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkup" --action "get_credits_balance"
```

## Run

```bash
oo connector run "linkup" --action "get_credits_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
