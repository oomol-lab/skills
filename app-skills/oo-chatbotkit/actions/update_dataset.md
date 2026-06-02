# ChatBotKit · `update_dataset`

Update an existing ChatBotKit dataset.

- **Service**: `chatbotkit`
- **Action**: `update_dataset`
- **Action id**: `chatbotkit.update_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "update_dataset"
```

## Run

```bash
oo connector run "chatbotkit" --action "update_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
