# Stripe · `identify_account`

Retrieve the Stripe account associated with the current secret API key.

- **Service**: `stripe`
- **Action**: `identify_account`
- **Action id**: `stripe.identify_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "identify_account"
```

## Run

```bash
oo connector run "stripe" --action "identify_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
