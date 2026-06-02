# v0 · `delete_chat`

Delete a v0 chat by chat ID.

- **Service**: `v0`
- **Action**: `delete_chat`
- **Action id**: `v0.delete_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "delete_chat"
```

## Run

```bash
oo connector run "v0" --action "delete_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites v0 data. Always confirm the target and get explicit user approval before running.
