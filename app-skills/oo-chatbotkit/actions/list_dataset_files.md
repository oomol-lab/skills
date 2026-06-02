# ChatBotKit · `list_dataset_files`

List files attached to a ChatBotKit dataset.

- **Service**: `chatbotkit`
- **Action**: `list_dataset_files`
- **Action id**: `chatbotkit.list_dataset_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_dataset_files"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_dataset_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
