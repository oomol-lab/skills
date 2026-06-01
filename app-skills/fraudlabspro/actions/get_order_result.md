# FraudLabs Pro · `get_order_result`

Retrieve a FraudLabs Pro order screening result by transaction id.

- **Service**: `fraudlabspro`
- **Action**: `get_order_result`
- **Action id**: `fraudlabspro.get_order_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fraudlabspro" --action "get_order_result"
```

## Run

```bash
oo connector run "fraudlabspro" --action "get_order_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
