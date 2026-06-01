# TiDB Cloud · `get_region`

Fetch one TiDB Cloud Dedicated region by region ID.

- **Service**: `tidb`
- **Action**: `get_region`
- **Action id**: `tidb.get_region`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_region"
```

## Run

```bash
oo connector run "tidb" --action "get_region" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
