# Mailgun · `send_email`

Send an email through Mailgun using a stored domain.

- **Service**: `mailgun`
- **Action**: `send_email`
- **Action id**: `mailgun.send_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "send_email"
```

## Run

```bash
oo connector run "mailgun" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailgun state. Confirm the exact payload and intended effect with the user before running.
