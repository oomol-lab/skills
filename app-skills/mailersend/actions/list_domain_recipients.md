# MailerSend · `list_domain_recipients`

List recipients associated with a MailerSend domain.

- **Service**: `mailersend`
- **Action**: `list_domain_recipients`
- **Action id**: `mailersend.list_domain_recipients`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "list_domain_recipients"
```

## Run

```bash
oo connector run "mailersend" --action "list_domain_recipients" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
