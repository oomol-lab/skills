# Databricks · `create_repo`

Create a Databricks workspace repo that links a Git remote into the connected workspace.

- **Service**: `databricks`
- **Action**: `create_repo`
- **Action id**: `databricks.create_repo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "create_repo"
```

## Run

```bash
oo connector run "databricks" --action "create_repo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
