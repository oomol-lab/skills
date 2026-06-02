# ChatBotKit · `search_dataset`

Run semantic search against a ChatBotKit dataset.

- **Service**: `chatbotkit`
- **Action**: `search_dataset`
- **Action id**: `chatbotkit.search_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "search_dataset"
```

## Run

```bash
oo connector run "chatbotkit" --action "search_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
