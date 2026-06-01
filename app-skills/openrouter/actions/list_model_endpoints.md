# OpenRouter · `list_model_endpoints`

List the currently available endpoints for a specific OpenRouter model.

- **Service**: `openrouter`
- **Action**: `list_model_endpoints`
- **Action id**: `openrouter.list_model_endpoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_model_endpoints"
```

## Run

```bash
oo connector run "openrouter" --action "list_model_endpoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
