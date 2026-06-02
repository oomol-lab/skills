# EmailListVerify · `delete_email_list`

Delete one finished EmailListVerify email list.

- **Service**: `emaillistverify`
- **Action**: `delete_email_list`
- **Action id**: `emaillistverify.delete_email_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "delete_email_list"
```

## Run

```bash
oo connector run "emaillistverify" --action "delete_email_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites EmailListVerify data. Always confirm the target and get explicit user approval before running.
