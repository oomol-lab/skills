# YNAB · `get_month`

Retrieve a single YNAB plan month.

- **Service**: `ynab`
- **Action**: `get_month`
- **Action id**: `ynab.get_month`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_month"
```

## Run

```bash
oo connector run "ynab" --action "get_month" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
