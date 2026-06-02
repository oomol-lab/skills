# 2Chat · `get_api_usage_info`

Fetch the current 2Chat account, rate limit, and usage counters for the connected API key.

- **Service**: `twochat`
- **Action**: `get_api_usage_info`
- **Action id**: `twochat.get_api_usage_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twochat" --action "get_api_usage_info"
```

## Run

```bash
oo connector run "twochat" --action "get_api_usage_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
