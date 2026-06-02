# ChatBotKit · `list_datasets`

List ChatBotKit datasets with optional pagination and metadata filtering.

- **Service**: `chatbotkit`
- **Action**: `list_datasets`
- **Action id**: `chatbotkit.list_datasets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_datasets"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_datasets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
