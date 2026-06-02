# ChatBotKit · `sync_file`

Trigger synchronization for an existing ChatBotKit file.

- **Service**: `chatbotkit`
- **Action**: `sync_file`
- **Action id**: `chatbotkit.sync_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "sync_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "sync_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ChatBotKit state. Confirm the exact payload and intended effect with the user before running.
