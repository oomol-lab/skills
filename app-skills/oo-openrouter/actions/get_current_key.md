# OpenRouter · `get_current_key`

Get metadata for the currently authenticated OpenRouter API key.

- **Service**: `openrouter`
- **Action**: `get_current_key`
- **Action id**: `openrouter.get_current_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "get_current_key"
```

## Run

```bash
oo connector run "openrouter" --action "get_current_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
