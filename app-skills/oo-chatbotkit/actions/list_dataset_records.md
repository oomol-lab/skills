# ChatBotKit · `list_dataset_records`

List records inside a ChatBotKit dataset.

- **Service**: `chatbotkit`
- **Action**: `list_dataset_records`
- **Action id**: `chatbotkit.list_dataset_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "list_dataset_records"
```

## Run

```bash
oo connector run "chatbotkit" --action "list_dataset_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
