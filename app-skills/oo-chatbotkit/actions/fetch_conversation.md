# ChatBotKit · `fetch_conversation`

Fetch a single ChatBotKit conversation by ID.

- **Service**: `chatbotkit`
- **Action**: `fetch_conversation`
- **Action id**: `chatbotkit.fetch_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "fetch_conversation"
```

## Run

```bash
oo connector run "chatbotkit" --action "fetch_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
