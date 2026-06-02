# Databricks · `get_run_output`

Get the output payload for one Databricks run, including notebook output or error details when available.

- **Service**: `databricks`
- **Action**: `get_run_output`
- **Action id**: `databricks.get_run_output`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "get_run_output"
```

## Run

```bash
oo connector run "databricks" --action "get_run_output" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
