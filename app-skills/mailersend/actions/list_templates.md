# MailerSend · `list_templates`

List MailerSend templates available to the current API token.

- **Service**: `mailersend`
- **Action**: `list_templates`
- **Action id**: `mailersend.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "list_templates"
```

## Run

```bash
oo connector run "mailersend" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
