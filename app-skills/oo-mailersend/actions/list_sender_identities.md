# MailerSend · `list_sender_identities`

List MailerSend sender identities available to the current API token.

- **Service**: `mailersend`
- **Action**: `list_sender_identities`
- **Action id**: `mailersend.list_sender_identities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "list_sender_identities"
```

## Run

```bash
oo connector run "mailersend" --action "list_sender_identities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
