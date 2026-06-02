# DataForSEO · `get_user_data`

Retrieve DataForSEO account details, balance, rates, limits, and usage data.

- **Service**: `dataforseo`
- **Action**: `get_user_data`
- **Action id**: `dataforseo.get_user_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "get_user_data"
```

## Run

```bash
oo connector run "dataforseo" --action "get_user_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
