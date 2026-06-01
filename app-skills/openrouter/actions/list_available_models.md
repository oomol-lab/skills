# OpenRouter · `list_available_models`

List the available OpenRouter models, or return the RSS feed when requested.

- **Service**: `openrouter`
- **Action**: `list_available_models`
- **Action id**: `openrouter.list_available_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_available_models"
```

## Run

```bash
oo connector run "openrouter" --action "list_available_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
