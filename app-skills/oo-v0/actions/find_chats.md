# v0 · `find_chats`

List chats in the connected v0 workspace with optional filters.

- **Service**: `v0`
- **Action**: `find_chats`
- **Action id**: `v0.find_chats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_chats"
```

## Run

```bash
oo connector run "v0" --action "find_chats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
