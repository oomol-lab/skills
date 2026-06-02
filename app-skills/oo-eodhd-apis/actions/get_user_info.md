# EODHD APIs · `get_user_info`

Get EODHD account details and API usage for the authenticated user.

- **Service**: `eodhd_apis`
- **Action**: `get_user_info`
- **Action id**: `eodhd_apis.get_user_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_user_info"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_user_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
