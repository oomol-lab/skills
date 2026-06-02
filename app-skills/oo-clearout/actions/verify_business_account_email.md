# Clearout · `verify_business_account_email`

Check whether an email address belongs to a business account.

- **Service**: `clearout`
- **Action**: `verify_business_account_email`
- **Action id**: `clearout.verify_business_account_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clearout" --action "verify_business_account_email"
```

## Run

```bash
oo connector run "clearout" --action "verify_business_account_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
