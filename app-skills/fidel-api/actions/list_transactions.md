# Fidel API · `list_transactions`

List Fidel transactions for one program ID.

- **Service**: `fidel_api`
- **Action**: `list_transactions`
- **Action id**: `fidel_api.list_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fidel_api" --action "list_transactions"
```

## Run

```bash
oo connector run "fidel_api" --action "list_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
