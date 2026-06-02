# TikHub · `get_endpoint_info`

Get TikHub cost and metadata for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `get_endpoint_info`
- **Action id**: `tikhub.get_endpoint_info`
- **Required scopes**: /api/v1/tikhub/user/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "get_endpoint_info"
```

## Run

```bash
oo connector run "tikhub" --action "get_endpoint_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
