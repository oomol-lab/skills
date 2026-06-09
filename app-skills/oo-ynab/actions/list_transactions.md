# YNAB · `list_transactions`

List YNAB plan transactions.

- **Service**: `ynab`
- **Action**: `list_transactions`
- **Action id**: `ynab.list_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_transactions"
```

## Run

```bash
oo connector run "ynab" --action "list_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
