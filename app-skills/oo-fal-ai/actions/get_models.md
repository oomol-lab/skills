# fal.ai · `get_models`

Discover fal model endpoints with optional text search, status, category, pagination, endpoint filtering, and response expansion.

- **Service**: `fal_ai`
- **Action**: `get_models`
- **Action id**: `fal_ai.get_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "get_models"
```

## Run

```bash
oo connector run "fal_ai" --action "get_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
