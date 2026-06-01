# Databricks · `list_cluster_zones`

List Databricks cluster availability zones for the connected workspace when the API is supported.

- **Service**: `databricks`
- **Action**: `list_cluster_zones`
- **Action id**: `databricks.list_cluster_zones`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_cluster_zones"
```

## Run

```bash
oo connector run "databricks" --action "list_cluster_zones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
