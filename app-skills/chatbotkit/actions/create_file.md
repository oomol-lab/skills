# ChatBotKit · `create_file`

Create a new ChatBotKit file resource.

- **Service**: `chatbotkit`
- **Action**: `create_file`
- **Action id**: `chatbotkit.create_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "create_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "create_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
