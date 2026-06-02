# OpenRouter · `list_embedding_models`

List the embedding models available through OpenRouter.

- **Service**: `openrouter`
- **Action**: `list_embedding_models`
- **Action id**: `openrouter.list_embedding_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_embedding_models"
```

## Run

```bash
oo connector run "openrouter" --action "list_embedding_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
