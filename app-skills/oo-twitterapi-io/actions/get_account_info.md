# TwitterAPI.io · `get_account_info`

Retrieve twitterapi.io account credit information for the API key.

- **Service**: `twitterapi_io`
- **Action**: `get_account_info`
- **Action id**: `twitterapi_io.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_account_info"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
