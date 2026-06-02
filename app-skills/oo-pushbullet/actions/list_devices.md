# Pushbullet · `list_devices`

List all registered devices for the current Pushbullet user.

- **Service**: `pushbullet`
- **Action**: `list_devices`
- **Action id**: `pushbullet.list_devices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "list_devices"
```

## Run

```bash
oo connector run "pushbullet" --action "list_devices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
