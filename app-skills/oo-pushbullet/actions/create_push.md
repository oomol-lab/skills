# Pushbullet · `create_push`

Send a Pushbullet note, link, file, or list push to the current user or a selected target.

- **Service**: `pushbullet`
- **Action**: `create_push`
- **Action id**: `pushbullet.create_push`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "create_push"
```

## Run

```bash
oo connector run "pushbullet" --action "create_push" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushbullet state. Confirm the exact payload and intended effect with the user before running.
