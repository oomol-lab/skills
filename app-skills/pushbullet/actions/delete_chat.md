# Pushbullet · `delete_chat`

Delete one Pushbullet chat by identifier.

- **Service**: `pushbullet`
- **Action**: `delete_chat`
- **Action id**: `pushbullet.delete_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "delete_chat"
```

## Run

```bash
oo connector run "pushbullet" --action "delete_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushbullet data. Always confirm the target and get explicit user approval before running.
