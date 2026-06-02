# TiDB Cloud · `list_api_keys`

List TiDB Cloud API keys visible to the connected organization API key.

- **Service**: `tidb`
- **Action**: `list_api_keys`
- **Action id**: `tidb.list_api_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_api_keys"
```

## Run

```bash
oo connector run "tidb" --action "list_api_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
