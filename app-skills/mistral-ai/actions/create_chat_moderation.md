# Mistral AI · `create_chat_moderation`

Call the Mistral chat moderations interface to detect chat message security risks.

- **Service**: `mistral_ai`
- **Action**: `create_chat_moderation`
- **Action id**: `mistral_ai.create_chat_moderation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_chat_moderation"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_chat_moderation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
