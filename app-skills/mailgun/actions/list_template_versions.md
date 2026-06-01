# Mailgun · `list_template_versions`

List versions for a Mailgun template.

- **Service**: `mailgun`
- **Action**: `list_template_versions`
- **Action id**: `mailgun.list_template_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "list_template_versions"
```

## Run

```bash
oo connector run "mailgun" --action "list_template_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
