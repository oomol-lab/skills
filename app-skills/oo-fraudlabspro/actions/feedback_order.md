# FraudLabs Pro · `feedback_order`

Send approve or reject feedback for a FraudLabs Pro order transaction.

- **Service**: `fraudlabspro`
- **Action**: `feedback_order`
- **Action id**: `fraudlabspro.feedback_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fraudlabspro" --action "feedback_order"
```

## Run

```bash
oo connector run "fraudlabspro" --action "feedback_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
