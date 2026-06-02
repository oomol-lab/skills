# SearchApi · `get_account_info`

Retrieve account usage statistics for the connected SearchApi API key.

- **Service**: `search_api`
- **Action**: `get_account_info`
- **Action id**: `search_api.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "search_api" --action "get_account_info"
```

## Run

```bash
oo connector run "search_api" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
