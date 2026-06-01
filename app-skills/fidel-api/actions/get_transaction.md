# Fidel API · `get_transaction`

Fetch one Fidel transaction by transaction ID.

- **Service**: `fidel_api`
- **Action**: `get_transaction`
- **Action id**: `fidel_api.get_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fidel_api" --action "get_transaction"
```

## Run

```bash
oo connector run "fidel_api" --action "get_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
