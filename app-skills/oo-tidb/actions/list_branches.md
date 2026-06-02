# TiDB Cloud · `list_branches`

List TiDB Cloud Starter or Essential branches for a cluster.

- **Service**: `tidb`
- **Action**: `list_branches`
- **Action id**: `tidb.list_branches`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_branches"
```

## Run

```bash
oo connector run "tidb" --action "list_branches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
