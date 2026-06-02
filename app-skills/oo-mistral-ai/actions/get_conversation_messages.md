# Mistral AI · `get_conversation_messages`

Get all message entries in the session.

- **Service**: `mistral_ai`
- **Action**: `get_conversation_messages`
- **Action id**: `mistral_ai.get_conversation_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_conversation_messages"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_conversation_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
