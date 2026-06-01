# Mistral AI · `list_conversations`

List sessions under the current organization, with pagination and metadata filtering parameters.

- **Service**: `mistral_ai`
- **Action**: `list_conversations`
- **Action id**: `mistral_ai.list_conversations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_conversations"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_conversations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
