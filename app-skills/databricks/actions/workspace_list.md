# Databricks · `workspace_list`

List the direct Databricks workspace objects under a workspace path.

- **Service**: `databricks`
- **Action**: `workspace_list`
- **Action id**: `databricks.workspace_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_list"
```

## Run

```bash
oo connector run "databricks" --action "workspace_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
