# Databricks · `cancel_run`

Cancel a Databricks job run by run ID.

- **Service**: `databricks`
- **Action**: `cancel_run`
- **Action id**: `databricks.cancel_run`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "cancel_run"
```

## Run

```bash
oo connector run "databricks" --action "cancel_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
