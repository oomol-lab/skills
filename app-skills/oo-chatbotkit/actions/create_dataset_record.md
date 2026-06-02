# ChatBotKit · `create_dataset_record`

Create a new record inside a ChatBotKit dataset.

- **Service**: `chatbotkit`
- **Action**: `create_dataset_record`
- **Action id**: `chatbotkit.create_dataset_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "create_dataset_record"
```

## Run

```bash
oo connector run "chatbotkit" --action "create_dataset_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
