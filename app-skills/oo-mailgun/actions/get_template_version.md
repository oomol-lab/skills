# Mailgun · `get_template_version`

Get content and metadata for one Mailgun template version.

- **Service**: `mailgun`
- **Action**: `get_template_version`
- **Action id**: `mailgun.get_template_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "get_template_version"
```

## Run

```bash
oo connector run "mailgun" --action "get_template_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
