# Vapi · `list_chats`

List Vapi chats with pagination plus optional assistant, squad, session, previous chat, and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_chats`
- **Action id**: `vapi.list_chats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_chats"
```

## Run

```bash
oo connector run "vapi" --action "list_chats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
