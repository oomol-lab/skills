# SMS Alert · `get_credit_balance`

Get the remaining SMS Alert credits grouped by delivery route.

- **Service**: `sms_alert`
- **Action**: `get_credit_balance`
- **Action id**: `sms_alert.get_credit_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sms_alert" --action "get_credit_balance"
```

## Run

```bash
oo connector run "sms_alert" --action "get_credit_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
