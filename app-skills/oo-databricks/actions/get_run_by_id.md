# Databricks · `get_run_by_id`

Get one Databricks job run by run ID.

- **Service**: `databricks`
- **Action**: `get_run_by_id`
- **Action id**: `databricks.get_run_by_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "get_run_by_id"
```

## Run

```bash
oo connector run "databricks" --action "get_run_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
