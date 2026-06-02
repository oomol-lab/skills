# ChatBotKit · `attach_dataset_file`

Attach an existing ChatBotKit file to a dataset.

- **Service**: `chatbotkit`
- **Action**: `attach_dataset_file`
- **Action id**: `chatbotkit.attach_dataset_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "attach_dataset_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "attach_dataset_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
