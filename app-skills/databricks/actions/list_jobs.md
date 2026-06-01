# Databricks · `list_jobs`

List Databricks jobs in the connected workspace with optional pagination, name filtering, and task expansion.

- **Service**: `databricks`
- **Action**: `list_jobs`
- **Action id**: `databricks.list_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_jobs"
```

## Run

```bash
oo connector run "databricks" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
