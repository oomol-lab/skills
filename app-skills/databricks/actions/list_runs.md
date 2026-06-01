# Databricks · `list_runs`

List Databricks job runs with optional job, state, time-range, and pagination filters.

- **Service**: `databricks`
- **Action**: `list_runs`
- **Action id**: `databricks.list_runs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_runs"
```

## Run

```bash
oo connector run "databricks" --action "list_runs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
