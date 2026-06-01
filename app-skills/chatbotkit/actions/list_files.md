# ChatBotKit · `list_files`

List ChatBotKit files with optional pagination and metadata filtering.

- **Service**: `chatbotkit`
- **Action**: `list_files`
- **Action id**: `chatbotkit.list_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_files"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
