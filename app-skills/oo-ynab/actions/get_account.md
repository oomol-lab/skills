# YNAB · `get_account`

Retrieve a single YNAB account.

- **Service**: `ynab`
- **Action**: `get_account`
- **Action id**: `ynab.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_account"
```

## Run

```bash
oo connector run "ynab" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
