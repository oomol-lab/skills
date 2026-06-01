# TikHub · `get_all_endpoints_info`

Get TikHub cost and metadata for all endpoints. Requires the /api/v1/tikhub/user/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `get_all_endpoints_info`
- **Action id**: `tikhub.get_all_endpoints_info`
- **Required scopes**: /api/v1/tikhub/user/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "get_all_endpoints_info"
```

## Run

```bash
oo connector run "tikhub" --action "get_all_endpoints_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
