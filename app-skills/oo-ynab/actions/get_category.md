# YNAB · `get_category`

Retrieve a single YNAB category.

- **Service**: `ynab`
- **Action**: `get_category`
- **Action id**: `ynab.get_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_category"
```

## Run

```bash
oo connector run "ynab" --action "get_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
