# EmailListVerify · `verify_email`

Verify a single email address with EmailListVerify's real-time API.

- **Service**: `emaillistverify`
- **Action**: `verify_email`
- **Action id**: `emaillistverify.verify_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "verify_email"
```

## Run

```bash
oo connector run "emaillistverify" --action "verify_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
