# YNAB · `get_plan_settings`

Retrieve settings for a YNAB plan.

- **Service**: `ynab`
- **Action**: `get_plan_settings`
- **Action id**: `ynab.get_plan_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_plan_settings"
```

## Run

```bash
oo connector run "ynab" --action "get_plan_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
