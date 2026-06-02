# Databricks · `create_cluster`

Create a Databricks cluster from a raw official clusters create payload and return the new cluster ID.

- **Service**: `databricks`
- **Action**: `create_cluster`
- **Action id**: `databricks.create_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "create_cluster"
```

## Run

```bash
oo connector run "databricks" --action "create_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
