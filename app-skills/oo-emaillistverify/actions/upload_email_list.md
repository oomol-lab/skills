# EmailListVerify · `upload_email_list`

Upload one email list file to EmailListVerify for batch verification.

- **Service**: `emaillistverify`
- **Action**: `upload_email_list`
- **Action id**: `emaillistverify.upload_email_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "upload_email_list"
```

## Run

```bash
oo connector run "emaillistverify" --action "upload_email_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes EmailListVerify state. Confirm the exact payload and intended effect with the user before running.
