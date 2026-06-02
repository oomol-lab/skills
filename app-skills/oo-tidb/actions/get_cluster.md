# TiDB Cloud · `get_cluster`

Fetch one TiDB Cloud Starter, Essential, or Dedicated cluster by ID.

- **Service**: `tidb`
- **Action**: `get_cluster`
- **Action id**: `tidb.get_cluster`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_cluster"
```

## Run

```bash
oo connector run "tidb" --action "get_cluster" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
