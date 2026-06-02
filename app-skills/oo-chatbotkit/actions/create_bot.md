# ChatBotKit · `create_bot`

Create a new ChatBotKit bot.

- **Service**: `chatbotkit`
- **Action**: `create_bot`
- **Action id**: `chatbotkit.create_bot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "create_bot"
```

## Run

```bash
oo connector run "chatbotkit" --action "create_bot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
