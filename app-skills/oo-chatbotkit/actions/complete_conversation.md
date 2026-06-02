# ChatBotKit · `complete_conversation`

Send a message to a ChatBotKit conversation and receive the next assistant reply.

- **Service**: `chatbotkit`
- **Action**: `complete_conversation`
- **Action id**: `chatbotkit.complete_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "complete_conversation"
```

## Run

```bash
oo connector run "chatbotkit" --action "complete_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
