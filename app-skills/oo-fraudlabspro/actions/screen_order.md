# FraudLabs Pro · `screen_order`

Screen an order transaction for fraud risk with FraudLabs Pro.

- **Service**: `fraudlabspro`
- **Action**: `screen_order`
- **Action id**: `fraudlabspro.screen_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fraudlabspro" --action "screen_order"
```

## Run

```bash
oo connector run "fraudlabspro" --action "screen_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
