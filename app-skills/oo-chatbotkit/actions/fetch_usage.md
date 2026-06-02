# ChatBotKit · `fetch_usage`

Fetch account-wide ChatBotKit usage statistics for tokens, conversations, messages, and database resources.

- **Service**: `chatbotkit`
- **Action**: `fetch_usage`
- **Action id**: `chatbotkit.fetch_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "fetch_usage"
```

## Run

```bash
oo connector run "chatbotkit" --action "fetch_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
