# TelTel · `send_sms`

Send a single outbound SMS message through the TelTel SMS outbox API.

- **Service**: `teltel`
- **Action**: `send_sms`
- **Action id**: `teltel.send_sms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "teltel" --action "send_sms"
```

## Run

```bash
oo connector run "teltel" --action "send_sms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TelTel state. Confirm the exact payload and intended effect with the user before running.
