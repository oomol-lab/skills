# ChatBotKit · `create_conversation_message`

Append a message to an existing ChatBotKit conversation.

- **Service**: `chatbotkit`
- **Action**: `create_conversation_message`
- **Action id**: `chatbotkit.create_conversation_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "create_conversation_message"
```

## Run

```bash
oo connector run "chatbotkit" --action "create_conversation_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
