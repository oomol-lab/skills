# YNAB · `list_payees`

List payees for a YNAB plan.

- **Service**: `ynab`
- **Action**: `list_payees`
- **Action id**: `ynab.list_payees`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_payees"
```

## Run

```bash
oo connector run "ynab" --action "list_payees" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
