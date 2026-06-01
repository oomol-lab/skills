# Mistral AI · `get_conversation_history`

Get all history entries in the session.

- **Service**: `mistral_ai`
- **Action**: `get_conversation_history`
- **Action id**: `mistral_ai.get_conversation_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_conversation_history"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_conversation_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
