# ChatBotKit · `detach_dataset_file`

Detach a ChatBotKit file from a dataset.

- **Service**: `chatbotkit`
- **Action**: `detach_dataset_file`
- **Action id**: `chatbotkit.detach_dataset_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "detach_dataset_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "detach_dataset_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
