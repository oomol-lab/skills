# ChatBotKit · `list_conversation_messages`

List messages inside a ChatBotKit conversation.

- **Service**: `chatbotkit`
- **Action**: `list_conversation_messages`
- **Action id**: `chatbotkit.list_conversation_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_conversation_messages"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_conversation_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
