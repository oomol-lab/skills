# Databricks · `list_cluster_node_types`

List Databricks cluster node types that are available in the connected workspace region.

- **Service**: `databricks`
- **Action**: `list_cluster_node_types`
- **Action id**: `databricks.list_cluster_node_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_cluster_node_types"
```

## Run

```bash
oo connector run "databricks" --action "list_cluster_node_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
