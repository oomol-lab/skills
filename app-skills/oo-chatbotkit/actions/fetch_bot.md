# ChatBotKit · `fetch_bot`

Fetch a single ChatBotKit bot by ID.

- **Service**: `chatbotkit`
- **Action**: `fetch_bot`
- **Action id**: `chatbotkit.fetch_bot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "fetch_bot"
```

## Run

```bash
oo connector run "chatbotkit" --action "fetch_bot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
