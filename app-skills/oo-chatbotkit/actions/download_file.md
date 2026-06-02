# ChatBotKit · `download_file`

Fetch the download URL for an existing ChatBotKit file.

- **Service**: `chatbotkit`
- **Action**: `download_file`
- **Action id**: `chatbotkit.download_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "download_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
