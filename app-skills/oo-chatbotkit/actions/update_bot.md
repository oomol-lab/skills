# ChatBotKit · `update_bot`

Update an existing ChatBotKit bot.

- **Service**: `chatbotkit`
- **Action**: `update_bot`
- **Action id**: `chatbotkit.update_bot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "update_bot"
```

## Run

```bash
oo connector run "chatbotkit" --action "update_bot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
