# TiDB Cloud · `list_exports`

List TiDB Cloud Starter or Essential export tasks.

- **Service**: `tidb`
- **Action**: `list_exports`
- **Action id**: `tidb.list_exports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_exports"
```

## Run

```bash
oo connector run "tidb" --action "list_exports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
