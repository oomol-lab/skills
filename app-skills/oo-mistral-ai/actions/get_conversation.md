# Mistral AI · `get_conversation`

Get metadata for a single session by session ID.

- **Service**: `mistral_ai`
- **Action**: `get_conversation`
- **Action id**: `mistral_ai.get_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_conversation"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
