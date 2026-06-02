# Mailtrap · `get_email_template`

Get one Mailtrap email template by ID.

- **Service**: `mailtrap`
- **Action**: `get_email_template`
- **Action id**: `mailtrap.get_email_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_email_template"
```

## Run

```bash
oo connector run "mailtrap" --action "get_email_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
