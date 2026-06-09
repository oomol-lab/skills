# YNAB · `list_plans`

List YNAB plans with summary information.

- **Service**: `ynab`
- **Action**: `list_plans`
- **Action id**: `ynab.list_plans`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "list_plans"
```

## Run

```bash
oo connector run "ynab" --action "list_plans" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
