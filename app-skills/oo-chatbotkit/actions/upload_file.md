# ChatBotKit · `upload_file`

Upload content to an existing ChatBotKit file using the official JSON upload modes.

- **Service**: `chatbotkit`
- **Action**: `upload_file`
- **Action id**: `chatbotkit.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "upload_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
