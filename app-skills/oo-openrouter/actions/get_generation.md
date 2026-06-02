# OpenRouter · `get_generation`

Get request and usage metadata for a specific OpenRouter generation.

- **Service**: `openrouter`
- **Action**: `get_generation`
- **Action id**: `openrouter.get_generation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "get_generation"
```

## Run

```bash
oo connector run "openrouter" --action "get_generation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
