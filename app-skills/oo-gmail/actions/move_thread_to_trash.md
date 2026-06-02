# Gmail · `move_thread_to_trash`

Move an entire Gmail thread to trash, including all messages in that conversation.

- **Service**: `gmail`
- **Action**: `move_thread_to_trash`
- **Action id**: `gmail.move_thread_to_trash`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "move_thread_to_trash"
```

## Run

```bash
oo connector run "gmail" --action "move_thread_to_trash" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gmail data. Always confirm the target and get explicit user approval before running.
