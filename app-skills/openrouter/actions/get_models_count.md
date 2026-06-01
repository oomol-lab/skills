# OpenRouter · `get_models_count`

Get the total number of OpenRouter models, optionally filtered by output modalities.

- **Service**: `openrouter`
- **Action**: `get_models_count`
- **Action id**: `openrouter.get_models_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "get_models_count"
```

## Run

```bash
oo connector run "openrouter" --action "get_models_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
