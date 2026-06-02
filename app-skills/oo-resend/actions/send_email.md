# Resend · `send_email`

Send an email with Resend.

- **Service**: `resend`
- **Action**: `send_email`
- **Action id**: `resend.send_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "resend" --action "send_email"
```

## Run

```bash
oo connector run "resend" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Resend state. Confirm the exact payload and intended effect with the user before running.
