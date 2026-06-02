# EmailListVerify · `get_email_list_progress`

Get the current progress of one uploaded EmailListVerify email list.

- **Service**: `emaillistverify`
- **Action**: `get_email_list_progress`
- **Action id**: `emaillistverify.get_email_list_progress`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "get_email_list_progress"
```

## Run

```bash
oo connector run "emaillistverify" --action "get_email_list_progress" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
