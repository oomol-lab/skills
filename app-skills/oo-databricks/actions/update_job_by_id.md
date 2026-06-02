# Databricks · `update_job_by_id`

Update an existing Databricks job by ID using the official partial-update payload fields.

- **Service**: `databricks`
- **Action**: `update_job_by_id`
- **Action id**: `databricks.update_job_by_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "update_job_by_id"
```

## Run

```bash
oo connector run "databricks" --action "update_job_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
