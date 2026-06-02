# Pushbullet · `update_device`

Update metadata for an existing Pushbullet device.

- **Service**: `pushbullet`
- **Action**: `update_device`
- **Action id**: `pushbullet.update_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "update_device"
```

## Run

```bash
oo connector run "pushbullet" --action "update_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
