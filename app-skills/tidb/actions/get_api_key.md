# TiDB Cloud · `get_api_key`

Fetch one TiDB Cloud API key by access key.

- **Service**: `tidb`
- **Action**: `get_api_key`
- **Action id**: `tidb.get_api_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "get_api_key"
```

## Run

```bash
oo connector run "tidb" --action "get_api_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
