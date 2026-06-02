# SendGrid · `list_transactional_templates`

List SendGrid transactional templates with pagination metadata.

- **Service**: `sendgrid`
- **Action**: `list_transactional_templates`
- **Action id**: `sendgrid.list_transactional_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendgrid" --action "list_transactional_templates"
```

## Run

```bash
oo connector run "sendgrid" --action "list_transactional_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
