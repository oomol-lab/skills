# Pushbullet · `create_device`

Create a new Pushbullet device for the current user.

- **Service**: `pushbullet`
- **Action**: `create_device`
- **Action id**: `pushbullet.create_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "create_device"
```

## Run

```bash
oo connector run "pushbullet" --action "create_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
