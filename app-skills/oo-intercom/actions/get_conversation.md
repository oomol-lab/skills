# Intercom · `get_conversation`

Get a single Intercom conversation with its conversation parts.

- **Service**: `intercom`
- **Action**: `get_conversation`
- **Action id**: `intercom.get_conversation`
- **Required scopes**: intercom.conversations.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "get_conversation"
```

## Run

```bash
oo connector run "intercom" --action "get_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
