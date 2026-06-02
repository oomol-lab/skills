# Databricks · `delete_repo`

Delete a Databricks workspace repo by repo ID.

- **Service**: `databricks`
- **Action**: `delete_repo`
- **Action id**: `databricks.delete_repo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "delete_repo"
```

## Run

```bash
oo connector run "databricks" --action "delete_repo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Databricks data. Always confirm the target and get explicit user approval before running.
