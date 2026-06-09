# YNAB · `get_plan`

Retrieve a single YNAB plan with related entities.

- **Service**: `ynab`
- **Action**: `get_plan`
- **Action id**: `ynab.get_plan`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_plan"
```

## Run

```bash
oo connector run "ynab" --action "get_plan" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
