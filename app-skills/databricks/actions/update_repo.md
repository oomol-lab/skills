# Databricks · `update_repo`

Update a Databricks workspace repo by switching branch or tag, or by changing sparse-checkout settings.

- **Service**: `databricks`
- **Action**: `update_repo`
- **Action id**: `databricks.update_repo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "update_repo"
```

## Run

```bash
oo connector run "databricks" --action "update_repo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
