# YNAB · `get_payee`

Retrieve a single YNAB payee.

- **Service**: `ynab`
- **Action**: `get_payee`
- **Action id**: `ynab.get_payee`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_payee"
```

## Run

```bash
oo connector run "ynab" --action "get_payee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
