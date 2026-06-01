# Databricks · `start_cluster`

Start a terminated Databricks cluster by cluster ID.

- **Service**: `databricks`
- **Action**: `start_cluster`
- **Action id**: `databricks.start_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "start_cluster"
```

## Run

```bash
oo connector run "databricks" --action "start_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
