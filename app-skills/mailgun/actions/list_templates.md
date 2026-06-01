# Mailgun · `list_templates`

List templates stored for a Mailgun domain.

- **Service**: `mailgun`
- **Action**: `list_templates`
- **Action id**: `mailgun.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "list_templates"
```

## Run

```bash
oo connector run "mailgun" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
