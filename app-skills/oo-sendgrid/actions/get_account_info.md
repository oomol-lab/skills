# SendGrid · `get_account_info`

Get the current SendGrid account type and sender reputation.

- **Service**: `sendgrid`
- **Action**: `get_account_info`
- **Action id**: `sendgrid.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendgrid" --action "get_account_info"
```

## Run

```bash
oo connector run "sendgrid" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
