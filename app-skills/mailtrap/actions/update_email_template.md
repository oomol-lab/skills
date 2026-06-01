# Mailtrap · `update_email_template`

Update one Mailtrap email template.

- **Service**: `mailtrap`
- **Action**: `update_email_template`
- **Action id**: `mailtrap.update_email_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "update_email_template"
```

## Run

```bash
oo connector run "mailtrap" --action "update_email_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
