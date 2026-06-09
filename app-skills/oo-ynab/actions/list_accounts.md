# YNAB · `list_accounts`

List accounts for a YNAB plan.

- **Service**: `ynab`
- **Action**: `list_accounts`
- **Action id**: `ynab.list_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_accounts"
```

## Run

```bash
oo connector run "ynab" --action "list_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
