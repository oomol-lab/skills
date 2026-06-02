# Mistral AI · `append_to_conversation`

Appends a new message to an existing session and triggers a new completion.

- **Service**: `mistral_ai`
- **Action**: `append_to_conversation`
- **Action id**: `mistral_ai.append_to_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "append_to_conversation"
```

## Run

```bash
oo connector run "mistral_ai" --action "append_to_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
