# Baidu Qianfan · `get_response`

Fetch a previously stored Baidu Qianfan response by its identifier.

- **Service**: `qianfan`
- **Action**: `get_response`
- **Action id**: `qianfan.get_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "get_response"
```

## Run

```bash
oo connector run "qianfan" --action "get_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
