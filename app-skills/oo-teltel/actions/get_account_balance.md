# TelTel · `get_account_balance`

Get the current TelTel account balance, credit, and credit limit.

- **Service**: `teltel`
- **Action**: `get_account_balance`
- **Action id**: `teltel.get_account_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "teltel" --action "get_account_balance"
```

## Run

```bash
oo connector run "teltel" --action "get_account_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
