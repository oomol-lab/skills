# YNAB · `list_categories`

List categories grouped by category group for a YNAB plan.

- **Service**: `ynab`
- **Action**: `list_categories`
- **Action id**: `ynab.list_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_categories"
```

## Run

```bash
oo connector run "ynab" --action "list_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
