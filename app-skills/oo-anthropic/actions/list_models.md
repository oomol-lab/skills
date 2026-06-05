# Anthropic · `list_models`

List Anthropic models available to the current API key.

- **Service**: `anthropic`
- **Action**: `list_models`
- **Action id**: `anthropic.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "anthropic" --action "list_models"
```

## Run

```bash
oo connector run "anthropic" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
