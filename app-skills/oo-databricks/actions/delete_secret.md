# Databricks · `delete_secret`

Delete one Databricks secret value from a Databricks secret scope.

- **Service**: `databricks`
- **Action**: `delete_secret`
- **Action id**: `databricks.delete_secret`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "delete_secret"
```

## Run

```bash
oo connector run "databricks" --action "delete_secret" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Databricks data. Always confirm the target and get explicit user approval before running.
