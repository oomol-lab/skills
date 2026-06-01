# Mailtrap · `list_email_templates`

List Mailtrap email templates.

- **Service**: `mailtrap`
- **Action**: `list_email_templates`
- **Action id**: `mailtrap.list_email_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_email_templates"
```

## Run

```bash
oo connector run "mailtrap" --action "list_email_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
