# MailerSend · `get_sender_identity`

Get a single MailerSend sender identity by ID.

- **Service**: `mailersend`
- **Action**: `get_sender_identity`
- **Action id**: `mailersend.get_sender_identity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "get_sender_identity"
```

## Run

```bash
oo connector run "mailersend" --action "get_sender_identity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
