# Bouncer · `verify_emails_batch_sync`

Verify multiple email addresses with Bouncer batch sync in a single request.

- **Service**: `bouncer`
- **Action**: `verify_emails_batch_sync`
- **Action id**: `bouncer.verify_emails_batch_sync`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "verify_emails_batch_sync"
```

## Run

```bash
oo connector run "bouncer" --action "verify_emails_batch_sync" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bouncer state. Confirm the exact payload and intended effect with the user before running.
