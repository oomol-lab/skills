# Pushbullet · `update_chat`

Mute or unmute an existing Pushbullet chat.

- **Service**: `pushbullet`
- **Action**: `update_chat`
- **Action id**: `pushbullet.update_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "update_chat"
```

## Run

```bash
oo connector run "pushbullet" --action "update_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
