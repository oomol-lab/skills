# 2Chat · `test_api_key`

Validate the connected 2Chat API key and return normalized account, limit, and usage information.

- **Service**: `twochat`
- **Action**: `test_api_key`
- **Action id**: `twochat.test_api_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twochat" --action "test_api_key"
```

## Run

```bash
oo connector run "twochat" --action "test_api_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
