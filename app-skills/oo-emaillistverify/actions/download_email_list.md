# EmailListVerify · `download_email_list`

Download one finished EmailListVerify email list as base64 content.

- **Service**: `emaillistverify`
- **Action**: `download_email_list`
- **Action id**: `emaillistverify.download_email_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "download_email_list"
```

## Run

```bash
oo connector run "emaillistverify" --action "download_email_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
