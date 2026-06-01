# Databricks · `run_now_job`

Trigger an immediate run for a Databricks job with optional parameter maps and idempotency token.

- **Service**: `databricks`
- **Action**: `run_now_job`
- **Action id**: `databricks.run_now_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "run_now_job"
```

## Run

```bash
oo connector run "databricks" --action "run_now_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
