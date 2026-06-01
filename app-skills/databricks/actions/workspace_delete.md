# Databricks · `workspace_delete`

Delete a Databricks workspace object or directory by absolute path.

- **Service**: `databricks`
- **Action**: `workspace_delete`
- **Action id**: `databricks.workspace_delete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_delete"
```

## Run

```bash
oo connector run "databricks" --action "workspace_delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Databricks data. Always confirm the target and get explicit user approval before running.
