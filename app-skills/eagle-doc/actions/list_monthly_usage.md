# Eagle Doc · `list_monthly_usage`

List Eagle Doc monthly usage history together with pricing metadata for each month returned.

- **Service**: `eagle_doc`
- **Action**: `list_monthly_usage`
- **Action id**: `eagle_doc.list_monthly_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eagle_doc" --action "list_monthly_usage"
```

## Run

```bash
oo connector run "eagle_doc" --action "list_monthly_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
