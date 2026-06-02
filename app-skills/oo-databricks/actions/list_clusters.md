# Databricks · `list_clusters`

List Databricks clusters with optional paging, filtering, and sorting controls from the official clusters API.

- **Service**: `databricks`
- **Action**: `list_clusters`
- **Action id**: `databricks.list_clusters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "list_clusters"
```

## Run

```bash
oo connector run "databricks" --action "list_clusters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
