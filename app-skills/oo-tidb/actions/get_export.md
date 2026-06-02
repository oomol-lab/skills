# TiDB Cloud · `get_export`

Fetch one TiDB Cloud Starter or Essential export task.

- **Service**: `tidb`
- **Action**: `get_export`
- **Action id**: `tidb.get_export`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_export"
```

## Run

```bash
oo connector run "tidb" --action "get_export" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
