# Databricks · `workspace_mkdirs`

Create a Databricks workspace directory, including any missing parent directories.

- **Service**: `databricks`
- **Action**: `workspace_mkdirs`
- **Action id**: `databricks.workspace_mkdirs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_mkdirs"
```

## Run

```bash
oo connector run "databricks" --action "workspace_mkdirs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
