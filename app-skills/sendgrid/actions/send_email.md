# SendGrid · `send_email`

Send a transactional email with SendGrid Mail Send.

- **Service**: `sendgrid`
- **Action**: `send_email`
- **Action id**: `sendgrid.send_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendgrid" --action "send_email"
```

## Run

```bash
oo connector run "sendgrid" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SendGrid state. Confirm the exact payload and intended effect with the user before running.
