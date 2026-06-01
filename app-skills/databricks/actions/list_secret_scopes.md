# Databricks · `list_secret_scopes`

List Databricks secret scopes in the connected workspace.

- **Service**: `databricks`
- **Action**: `list_secret_scopes`
- **Action id**: `databricks.list_secret_scopes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_secret_scopes"
```

## Run

```bash
oo connector run "databricks" --action "list_secret_scopes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
