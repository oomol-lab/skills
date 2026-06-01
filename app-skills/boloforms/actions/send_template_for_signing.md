# BoloForms · `send_template_for_signing`

Start a signing request for a group of participants by using an existing template.

- **Service**: `boloforms`
- **Action**: `send_template_for_signing`
- **Action id**: `boloforms.send_template_for_signing`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boloforms" --action "send_template_for_signing"
```

## Run

```bash
oo connector run "boloforms" --action "send_template_for_signing" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes BoloForms state. Confirm the exact payload and intended effect with the user before running.
