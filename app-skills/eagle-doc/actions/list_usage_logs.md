# Eagle Doc · `list_usage_logs`

List recent Eagle Doc request log rows with processed page counts and timestamps.

- **Service**: `eagle_doc`
- **Action**: `list_usage_logs`
- **Action id**: `eagle_doc.list_usage_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eagle_doc" --action "list_usage_logs"
```

## Run

```bash
oo connector run "eagle_doc" --action "list_usage_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
