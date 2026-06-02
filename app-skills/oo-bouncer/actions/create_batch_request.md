# Bouncer · `create_batch_request`

Create an async Bouncer batch verification request for multiple email addresses.

- **Service**: `bouncer`
- **Action**: `create_batch_request`
- **Action id**: `bouncer.create_batch_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "create_batch_request"
```

## Run

```bash
oo connector run "bouncer" --action "create_batch_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bouncer state. Confirm the exact payload and intended effect with the user before running.
