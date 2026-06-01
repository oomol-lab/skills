# EmailListVerify · `verify_email_detailed`

Verify and enrich a single email address with EmailListVerify's detailed API.

- **Service**: `emaillistverify`
- **Action**: `verify_email_detailed`
- **Action id**: `emaillistverify.verify_email_detailed`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "verify_email_detailed"
```

## Run

```bash
oo connector run "emaillistverify" --action "verify_email_detailed" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
