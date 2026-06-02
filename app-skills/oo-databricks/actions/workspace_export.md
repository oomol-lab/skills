# Databricks · `workspace_export`

Export one Databricks workspace object as base64 content or direct text content, depending on the export mode.

- **Service**: `databricks`
- **Action**: `workspace_export`
- **Action id**: `databricks.workspace_export`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_export"
```

## Run

```bash
oo connector run "databricks" --action "workspace_export" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
