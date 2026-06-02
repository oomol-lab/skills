# TiDB Cloud · `get_branch`

Fetch one TiDB Cloud Starter or Essential branch by branch ID.

- **Service**: `tidb`
- **Action**: `get_branch`
- **Action id**: `tidb.get_branch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_branch"
```

## Run

```bash
oo connector run "tidb" --action "get_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
