# Pushbullet · `update_push`

Update a Pushbullet push, typically to dismiss it or update list items.

- **Service**: `pushbullet`
- **Action**: `update_push`
- **Action id**: `pushbullet.update_push`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "update_push"
```

## Run

```bash
oo connector run "pushbullet" --action "update_push" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
