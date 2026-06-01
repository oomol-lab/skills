# Linguapop · `send_invitation`

Create a Linguapop placement test invitation for a candidate, optionally send an email, generate a kiosk code, and configure callback or return URLs.

- **Service**: `linguapop`
- **Action**: `send_invitation`
- **Action id**: `linguapop.send_invitation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linguapop" --action "send_invitation"
```

## Run

```bash
oo connector run "linguapop" --action "send_invitation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linguapop state. Confirm the exact payload and intended effect with the user before running.
