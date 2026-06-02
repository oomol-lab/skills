# MailerSend · `get_template`

Get a single MailerSend template by ID.

- **Service**: `mailersend`
- **Action**: `get_template`
- **Action id**: `mailersend.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "get_template"
```

## Run

```bash
oo connector run "mailersend" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
