# Databricks · `permanent_delete_cluster`

Permanently delete a Databricks cluster by cluster ID.

- **Service**: `databricks`
- **Action**: `permanent_delete_cluster`
- **Action id**: `databricks.permanent_delete_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "permanent_delete_cluster"
```

## Run

```bash
oo connector run "databricks" --action "permanent_delete_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Databricks data. Always confirm the target and get explicit user approval before running.
