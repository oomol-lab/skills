# ChatBotKit · `create_conversation`

Create a new ChatBotKit conversation with either a bot reference or inline bot configuration.

- **Service**: `chatbotkit`
- **Action**: `create_conversation`
- **Action id**: `chatbotkit.create_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "create_conversation"
```

## Run

```bash
oo connector run "chatbotkit" --action "create_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
