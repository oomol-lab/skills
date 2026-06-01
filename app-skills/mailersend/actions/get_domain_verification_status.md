# MailerSend · `get_domain_verification_status`

Get the verification status for a MailerSend domain.

- **Service**: `mailersend`
- **Action**: `get_domain_verification_status`
- **Action id**: `mailersend.get_domain_verification_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "get_domain_verification_status"
```

## Run

```bash
oo connector run "mailersend" --action "get_domain_verification_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
