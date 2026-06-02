# Dailybot · `send_email`

Send an email notification through Dailybot.

- **Service**: `dailybot`
- **Action**: `send_email`
- **Action id**: `dailybot.send_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "send_email"
```

## Run

```bash
oo connector run "dailybot" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dailybot state. Confirm the exact payload and intended effect with the user before running.
