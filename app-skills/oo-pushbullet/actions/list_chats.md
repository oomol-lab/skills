# Pushbullet · `list_chats`

List all chats for the current Pushbullet user.

- **Service**: `pushbullet`
- **Action**: `list_chats`
- **Action id**: `pushbullet.list_chats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "list_chats"
```

## Run

```bash
oo connector run "pushbullet" --action "list_chats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
