# Mistral AI · `get_model`

Get details of a single Mistral model by model ID.

- **Service**: `mistral_ai`
- **Action**: `get_model`
- **Action id**: `mistral_ai.get_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_model"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
