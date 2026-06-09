# YNAB · `list_months`

List months for a YNAB plan.

- **Service**: `ynab`
- **Action**: `list_months`
- **Action id**: `ynab.list_months`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_months"
```

## Run

```bash
oo connector run "ynab" --action "list_months" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
