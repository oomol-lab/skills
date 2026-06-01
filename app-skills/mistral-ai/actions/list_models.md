# Mistral AI · `list_models`

List all Mistral models accessible by the current API Key.

- **Service**: `mistral_ai`
- **Action**: `list_models`
- **Action id**: `mistral_ai.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_models"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
