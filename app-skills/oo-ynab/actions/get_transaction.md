# YNAB · `get_transaction`

Retrieve a single YNAB transaction.

- **Service**: `ynab`
- **Action**: `get_transaction`
- **Action id**: `ynab.get_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_transaction"
```

## Run

```bash
oo connector run "ynab" --action "get_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
