# ZeroBounce · `get_credit_balance`

Get the current ZeroBounce credit balance.

- **Service**: `zerobounce`
- **Action**: `get_credit_balance`
- **Action id**: `zerobounce.get_credit_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "get_credit_balance"
```

## Run

```bash
oo connector run "zerobounce" --action "get_credit_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
