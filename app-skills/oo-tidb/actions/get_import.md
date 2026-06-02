# TiDB Cloud · `get_import`

Fetch one TiDB Cloud Starter, Essential, or Dedicated import task.

- **Service**: `tidb`
- **Action**: `get_import`
- **Action id**: `tidb.get_import`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_import"
```

## Run

```bash
oo connector run "tidb" --action "get_import" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TiDB Cloud state. Confirm the exact payload and intended effect with the user before running.
