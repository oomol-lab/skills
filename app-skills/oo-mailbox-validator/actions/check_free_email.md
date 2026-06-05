# MailboxValidator · `check_free_email`

Check whether an email address belongs to a free email provider.

- **Service**: `mailbox_validator`
- **Action**: `check_free_email`
- **Action id**: `mailbox_validator.check_free_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailbox_validator" --action "check_free_email"
```

## Run

```bash
oo connector run "mailbox_validator" --action "check_free_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
