# Databricks · `edit_cluster`

Edit an existing Databricks cluster by cluster ID using a raw official clusters edit payload.

- **Service**: `databricks`
- **Action**: `edit_cluster`
- **Action id**: `databricks.edit_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "edit_cluster"
```

## Run

```bash
oo connector run "databricks" --action "edit_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
