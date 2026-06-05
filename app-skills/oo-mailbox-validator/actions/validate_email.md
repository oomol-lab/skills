# MailboxValidator · `validate_email`

Validate a single email address and return MailboxValidator deliverability signals.

- **Service**: `mailbox_validator`
- **Action**: `validate_email`
- **Action id**: `mailbox_validator.validate_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailbox_validator" --action "validate_email"
```

## Run

```bash
oo connector run "mailbox_validator" --action "validate_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
