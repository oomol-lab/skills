# Dailybot · `send_message`

Send a chat message to a Dailybot user, team, or channel.

- **Service**: `dailybot`
- **Action**: `send_message`
- **Action id**: `dailybot.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "send_message"
```

## Run

```bash
oo connector run "dailybot" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dailybot state. Confirm the exact payload and intended effect with the user before running.
