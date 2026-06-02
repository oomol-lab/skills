# Databricks · `create_job`

Create a Databricks job from a raw official Jobs API settings object and return the new job ID.

- **Service**: `databricks`
- **Action**: `create_job`
- **Action id**: `databricks.create_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "create_job"
```

## Run

```bash
oo connector run "databricks" --action "create_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
