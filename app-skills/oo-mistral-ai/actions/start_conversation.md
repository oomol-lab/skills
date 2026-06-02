# Mistral AI · `start_conversation`

Create a new session and immediately append the message or tool call context.

- **Service**: `mistral_ai`
- **Action**: `start_conversation`
- **Action id**: `mistral_ai.start_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "start_conversation"
```

## Run

```bash
oo connector run "mistral_ai" --action "start_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
