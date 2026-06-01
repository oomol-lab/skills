# Intercom · `list_conversations`

List Intercom conversations with cursor-based pagination.

- **Service**: `intercom`
- **Action**: `list_conversations`
- **Action id**: `intercom.list_conversations`
- **Required scopes**: intercom.conversations.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "list_conversations"
```

## Run

```bash
oo connector run "intercom" --action "list_conversations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
