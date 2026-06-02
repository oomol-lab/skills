# Pushbullet · `create_chat`

Create a Pushbullet chat with another user or email address.

- **Service**: `pushbullet`
- **Action**: `create_chat`
- **Action id**: `pushbullet.create_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "create_chat"
```

## Run

```bash
oo connector run "pushbullet" --action "create_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
