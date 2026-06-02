# Postmark · `send_email`

Send a transactional email through the current Postmark server.

- **Service**: `postmark`
- **Action**: `send_email`
- **Action id**: `postmark.send_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "send_email"
```

## Run

```bash
oo connector run "postmark" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postmark state. Confirm the exact payload and intended effect with the user before running.
