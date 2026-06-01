# Databricks · `get_cluster`

Get one Databricks cluster by cluster ID.

- **Service**: `databricks`
- **Action**: `get_cluster`
- **Action id**: `databricks.get_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "get_cluster"
```

## Run

```bash
oo connector run "databricks" --action "get_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
