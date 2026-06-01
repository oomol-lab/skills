# Databricks · `list_secrets`

List Databricks secret metadata rows in one secret scope.

- **Service**: `databricks`
- **Action**: `list_secrets`
- **Action id**: `databricks.list_secrets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_secrets"
```

## Run

```bash
oo connector run "databricks" --action "list_secrets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
