# Databricks · `workspace_import`

Import base64 content into the Databricks workspace at an absolute path.

- **Service**: `databricks`
- **Action**: `workspace_import`
- **Action id**: `databricks.workspace_import`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "workspace_import"
```

## Run

```bash
oo connector run "databricks" --action "workspace_import" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
