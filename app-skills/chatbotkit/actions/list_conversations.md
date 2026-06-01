# ChatBotKit · `list_conversations`

List ChatBotKit conversations with optional pagination and metadata filtering.

- **Service**: `chatbotkit`
- **Action**: `list_conversations`
- **Action id**: `chatbotkit.list_conversations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_conversations"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_conversations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
