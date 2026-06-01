# MailerSend · `list_messages`

List messages available to the current MailerSend API token.

- **Service**: `mailersend`
- **Action**: `list_messages`
- **Action id**: `mailersend.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "list_messages"
```

## Run

```bash
oo connector run "mailersend" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
