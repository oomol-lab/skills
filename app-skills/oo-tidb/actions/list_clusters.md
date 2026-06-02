# TiDB Cloud · `list_clusters`

List TiDB Cloud Starter, Essential, or Dedicated clusters.

- **Service**: `tidb`
- **Action**: `list_clusters`
- **Action id**: `tidb.list_clusters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_clusters"
```

## Run

```bash
oo connector run "tidb" --action "list_clusters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
