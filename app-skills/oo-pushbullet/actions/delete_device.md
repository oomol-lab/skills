# Pushbullet · `delete_device`

Delete one Pushbullet device by identifier.

- **Service**: `pushbullet`
- **Action**: `delete_device`
- **Action id**: `pushbullet.delete_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "delete_device"
```

## Run

```bash
oo connector run "pushbullet" --action "delete_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushbullet data. Always confirm the target and get explicit user approval before running.
