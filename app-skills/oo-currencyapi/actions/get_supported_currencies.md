# currencyapi · `get_supported_currencies`

Retrieve supported currency metadata from currencyapi.

- **Service**: `currencyapi`
- **Action**: `get_supported_currencies`
- **Action id**: `currencyapi.get_supported_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyapi" --action "get_supported_currencies"
```

## Run

```bash
oo connector run "currencyapi" --action "get_supported_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
