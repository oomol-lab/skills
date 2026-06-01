# Databricks · `submit_run`

Submit a one-time Databricks run from a raw official Jobs API submit payload and return the run ID.

- **Service**: `databricks`
- **Action**: `submit_run`
- **Action id**: `databricks.submit_run`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "submit_run"
```

## Run

```bash
oo connector run "databricks" --action "submit_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
