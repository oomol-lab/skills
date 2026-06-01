# ChatBotKit · `list_bots`

List ChatBotKit bots with optional pagination and metadata filtering.

- **Service**: `chatbotkit`
- **Action**: `list_bots`
- **Action id**: `chatbotkit.list_bots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_bots"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_bots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
