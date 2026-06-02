# Databricks · `workspace_get_status`

Get metadata for one Databricks workspace object by absolute path.

- **Service**: `databricks`
- **Action**: `workspace_get_status`
- **Action id**: `databricks.workspace_get_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_get_status"
```

## Run

```bash
oo connector run "databricks" --action "workspace_get_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
