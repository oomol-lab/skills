# Mailgun · `get_template`

Get metadata for one Mailgun template and optionally its active version.

- **Service**: `mailgun`
- **Action**: `get_template`
- **Action id**: `mailgun.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "get_template"
```

## Run

```bash
oo connector run "mailgun" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
