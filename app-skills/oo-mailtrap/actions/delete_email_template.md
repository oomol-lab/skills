# Mailtrap · `delete_email_template`

Delete one Mailtrap email template.

- **Service**: `mailtrap`
- **Action**: `delete_email_template`
- **Action id**: `mailtrap.delete_email_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "delete_email_template"
```

## Run

```bash
oo connector run "mailtrap" --action "delete_email_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailtrap data. Always confirm the target and get explicit user approval before running.
