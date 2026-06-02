# currencyapi · `get_api_status`

Retrieve current currencyapi account quota usage.

- **Service**: `currencyapi`
- **Action**: `get_api_status`
- **Action id**: `currencyapi.get_api_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyapi" --action "get_api_status"
```

## Run

```bash
oo connector run "currencyapi" --action "get_api_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
