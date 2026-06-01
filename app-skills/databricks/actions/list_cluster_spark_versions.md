# Databricks · `list_cluster_spark_versions`

List Databricks Runtime and Spark versions that can be used when creating or editing clusters.

- **Service**: `databricks`
- **Action**: `list_cluster_spark_versions`
- **Action id**: `databricks.list_cluster_spark_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_cluster_spark_versions"
```

## Run

```bash
oo connector run "databricks" --action "list_cluster_spark_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
